import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {registerAction, registerFailureAction, registerSuccessAction} from "../store/actions/register";
import {catchError, map, of, switchMap, tap} from "rxjs";
import {AuthService} from "../services/auth-service.service";
import {CurrentUserInterface} from "../../shared/types/current-user";
import {HttpErrorResponse} from "@angular/common/http";
import {PersistanceService} from "../../shared/services/persistance.service";
import {Router} from "@angular/router";

@Injectable()
export class RegisterEffect {
  register$=createEffect(()=>this.actions$.pipe(
    ofType(registerAction),
    switchMap(({request}) =>{
      return this.authService.register(request).pipe(
        map((currentUser:CurrentUserInterface)=>{
          this.persistnceService.set('accessToken',currentUser.token);
          return registerSuccessAction({currentUser})
        }),
        catchError((error:HttpErrorResponse)=>{
          return of(registerFailureAction({backendErrors:error.error.errors}))
        }))
  })
  ))

  navigateAfterRegister$=createEffect(()=>this.actions$.pipe(
    ofType(registerSuccessAction),tap(()=>{
      this.router.navigateByUrl('/feed')
    })),{dispatch:false})



  constructor(private actions$:Actions,private authService:AuthService,private persistnceService:PersistanceService,private router:Router) {
  }
}
