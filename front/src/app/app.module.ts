import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {HomePageComponent} from './home-page/home-page.component';
import {ApiService} from "./api.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenStorageService} from "./token-storage.service";
import {AuthInterceptor} from "./auth.interceptor";


@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,

        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
    ],
    providers: [
        ApiService,
        TokenStorageService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
