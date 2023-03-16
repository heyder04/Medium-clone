import {ArticleInterface} from "../../../types/article-interface";

export interface GetFeedResponse {
  articles:ArticleInterface[]
  articlesCount:number
}
