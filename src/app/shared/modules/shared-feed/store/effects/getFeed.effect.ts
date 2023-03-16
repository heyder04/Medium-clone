import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {getFeedAction, getFeedFailureAction, getFeedSuccessAction} from "../actions/getFeed.action";
import {catchError, map, of, switchMap} from "rxjs";
import {SharedFeedService} from "../../services/shared-feed.service";
import {GetFeedResponse} from "../../types/get-feed-response";
import {HttpErrorResponse} from "@angular/common/http";


@Injectable()
export class GetFeedEffect {

  getFeed$=createEffect(()=>
    this.actions$.pipe(
    ofType(getFeedAction),
    switchMap(({url}) => {
      return this.feedService.getFeed(url).pipe(
        map((feed:GetFeedResponse)=>{
          return getFeedSuccessAction({feed})
        }),
        catchError((error:HttpErrorResponse)=>{
          return of(getFeedFailureAction())
        }))
    })
  ))




  constructor(private actions$:Actions,private feedService:SharedFeedService) {
  }
}
