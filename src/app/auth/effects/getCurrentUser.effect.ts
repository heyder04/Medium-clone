import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {AuthService} from "../services/auth-service.service";
import {CurrentUserInterface} from "../../shared/types/current-user";
import {HttpErrorResponse} from "@angular/common/http";
import {PersistanceService} from "../../shared/services/persistance.service";
import {Router} from "@angular/router";
import {loginAction, loginFailureAction, loginSuccessAction} from "../store/actions/login";
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction
} from "../store/actions/getCurrentUser";

@Injectable()
export class GetCurrentUserEffect {

  getCurrentUser$=createEffect(()=>this.actions$.pipe(
    ofType(getCurrentUserAction),
    switchMap(() =>{
      const token=localStorage.getItem('accessToken');
      if(!token){
        return  of(getCurrentUserFailureAction())
      }
      return this.authService.getCurrentUser().pipe(
        map((currentUser:CurrentUserInterface)=>{
          // this.persistnceService.set('accessToken',currentUser.token);
          return getCurrentUserSuccessAction({currentUser})
        }),
        catchError((error:HttpErrorResponse)=>{
          return of(getCurrentUserFailureAction())
        }))
  })
  ))




  constructor(private actions$:Actions,private authService:AuthService,private persistnceService:PersistanceService) {
  }
}
