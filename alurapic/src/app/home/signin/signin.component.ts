import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {

    loginForm: FormGroup;   //this property going to controle/validate the form in template file

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({ //responsible in create the form and attributes in it
            userName: ['', Validators.required], //default values, validations
            password: ['', Validators.required]  //check the template
        });
    }
}