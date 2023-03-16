import {createReducer, on, Action} from '@ngrx/store'
import {getFeedAction, getFeedFailureAction, getFeedSuccessAction} from "./actions/getFeed.action";
import {FeedStateInterface} from "../types/feed-state-interface";


const initialState: FeedStateInterface = {
  data: null,
  isLoading: false,
  error: null
}

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      data: action.feed
    })
  ),
  on(
    getFeedFailureAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: false
    })
  )
)

export function reducers2(state: FeedStateInterface, action: Action) {
  return feedReducer(state, action)
}
