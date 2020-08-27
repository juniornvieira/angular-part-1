import { Injectable } from '@angular/core';
import { SignUpService } from './signup.service';
import { AbstractControl } from '@angular/forms';
import { debounceTime, first, map, switchMap } from 'rxjs/operators';

@Injectable()
export class UserNotTakenValidatorService {

    constructor(private signUpService: SignUpService) { }

    checkUserNameTaken() {

        return (control: AbstractControl) => {
            return control
                .valueChanges               // this guys will return a observable
                .pipe(debounceTime(300))    // will launch the call after 300 mlsends - I dont want to go to backend each second
                .pipe(switchMap(userName => { //there 2 observable emission here. 
                                              //switchMap stops(or switch) to listen valueChanges emission and starts to listen 
                                              //checkUserNameTaken observable
                    return this.signUpService.checkUserNameTaken(userName);  
                }))
                .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null))
                .pipe(first()); //above code isn't completing the listening. all the function is just listening.
                                //first() is responsible for complete when first data arrives
                                //first() forces the completex
        }
    }
}