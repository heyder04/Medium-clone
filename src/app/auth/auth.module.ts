import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './components/register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import {reducers} from "./store/reducers";
import {StoreModule} from "@ngrx/store";
import {AuthService} from "./services/auth-service.service";
import {HttpClientModule} from "@angular/common/http";
import {RegisterEffect} from "./effects/register.effect";
import {EffectsModule} from "@ngrx/effects";
import {BackendErrorMessagesModule} from "../shared/modules/backend-error-messages/backend-error-messages.module";
import {PersistanceService} from "../shared/services/persistance.service";
import {LoginEffect} from "./effects/login.effect";
import {LoginComponent} from "./components/login/login.component";
import {GetCurrentUserEffect} from "./effects/getCurrentUser.effect";



@NgModule({
    declarations: [
        RegisterComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        StoreModule.forFeature('auth', reducers),
        EffectsModule.forFeature([
            RegisterEffect, LoginEffect, GetCurrentUserEffect
        ]),
        BackendErrorMessagesModule
    ],
    exports: [
        LoginComponent
    ],
    providers: [AuthService, PersistanceService]
})
export class AuthModule { }
