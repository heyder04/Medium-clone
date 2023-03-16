import {createAction, props} from "@ngrx/store";
import {ActionTypes} from "../action-types";
import {GetFeedResponse} from "../../types/get-feed-response";

export const getFeedAction = createAction(
  ActionTypes.GET_FEED,
  props<{url: string}>()
)

export const getFeedSuccessAction = createAction(
  ActionTypes.GET_FEED_SUCCESS,
  props<{feed: GetFeedResponse}>()
)

export const getFeedFailureAction = createAction(ActionTypes.GET_FEED_FAILURE)
