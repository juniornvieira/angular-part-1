import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../token/token.service';
import { User } from './user';
import * as jwt_decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class UserService {

    private userSubject = new BehaviorSubject<User>(null); 
    //BehaviorSubject = emit the value, did someone consume the value ? no, keep holding the value until someone consumes
        //header.component(where user will be consumid) is load after sigin.component (where the token is emitted)
    //who subscribe in userSubject will be receiving a User

    constructor(private tokenService: TokenService) { //when the page was closed and open again
        this.tokenService.hasToken() &&
            this.decodeAndNotify();
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        return this.userSubject.asObservable(); //who be subscribed will receive an observable
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        const user = jwt_decode(token) as User; //decodificou token
        this.userSubject.next(user); //emiting for who is  subscribed, in this case the header
    }

    logout() {
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }
}