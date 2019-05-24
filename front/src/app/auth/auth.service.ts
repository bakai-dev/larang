import {Injectable} from '@angular/core';
import {ApiService} from "../api.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private api: ApiService) {
    }

    register(RegisterForm: RegisterForm): Observable<AuthResponse> {
        return this.api.post('auth/register', RegisterForm)
            .pipe(map(response => response.data));
    }
}

export interface RegisterForm {
    email: string;
    password: string;
    password_confirmation: string;
}

export interface ApiResponce<T> {
    data: T;
}

export interface AuthResponse {
    user: User;
}

export interface User {
    id: number;
    name: string;
    email: string;
}