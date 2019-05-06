import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {MatButtonModule, MatCardModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {AuthService} from "./auth.service";

@NgModule({
    declarations: [SignInComponent, SignUpComponent],
    imports: [
        CommonModule,
        AuthRoutingModule,

        MatCardModule,
        MatInputModule,
        MatButtonModule,

        ReactiveFormsModule
    ],
    providers: [AuthService]
})
export class AuthModule {
}
