import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from "../auth.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: '',
            email: '',
            password: '',
            password_confirmation: '',
        });
    }

    register() {
        this.authService.register(this.form.value).subscribe(
            () => this.router.navigate(['']),
            (response: HttpErrorResponse) => this.setErrors(response.error.errors)
        );
    }

    private setErrors(errors: SignUpErrors) {
        Object.keys(errors).forEach(attribute => {
            this.form.get(attribute).setErrors(errors[attribute]);
        });
    }
}

export interface SignUpErrors {
    name?: string[];
    email?: string[];
    password?: string[];
    password_confirmation?: string[];

}