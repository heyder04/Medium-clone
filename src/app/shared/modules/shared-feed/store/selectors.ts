import {AppStateInterface} from "../../../types/app-state-interface";
import {AuthStateInterface} from "../../../../auth/types/auth-state-interface";
import {createSelector} from "@ngrx/store";
import {FeedStateInterface} from "../types/feed-state-interface";

export const feedFeatureSelector = (
  state:AppStateInterface
):FeedStateInterface=>state.feed

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (feedState:FeedStateInterface) => feedState.isLoading
)
export const isErrorSelector = createSelector(
  feedFeatureSelector,
  (feedState:FeedStateInterface) => feedState.error
)

export const isFeedSelector = createSelector(
  feedFeatureSelector,
  (feedState:FeedStateInterface) => feedState.data
)

