import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {AuthService} from "../services/auth-service.service";
import {CurrentUserInterface} from "../../shared/types/current-user";
import {HttpErrorResponse} from "@angular/common/http";
import {PersistanceService} from "../../shared/services/persistance.service";
import {Router} from "@angular/router";
import {loginAction, loginFailureAction, loginSuccessAction} from "../store/actions/login";

@Injectable()
export class LoginEffect {
  login$=createEffect(()=>this.actions$.pipe(
    ofType(loginAction),
    switchMap(({request}) =>{
      return this.authService.login(request).pipe(
        map((currentUser:CurrentUserInterface)=>{
          this.persistnceService.set('accessToken',currentUser.token);
          return loginSuccessAction({currentUser})
        }),
        catchError((error:HttpErrorResponse)=>{
          return of(loginFailureAction({backendErrors:error.error.errors}))
        }))
  })
  ))

  navigateAfteraLogin$=createEffect(()=>this.actions$.pipe(
    ofType(loginSuccessAction),tap(()=>{
      this.router.navigateByUrl('/feed')
    })),{dispatch:false})


m
  constructor(private actions$:Actions,private authService:AuthService,private persistnceService:PersistanceService,private router:Router) {
  }
}
