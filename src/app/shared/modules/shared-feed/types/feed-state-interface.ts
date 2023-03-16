import {GetFeedResponse} from "./get-feed-response";

export interface FeedStateInterface {
  isLoading: boolean
  error: string | null
  data: GetFeedResponse | null
}
