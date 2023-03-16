import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../../environments/environment";
import {GetFeedResponse} from "../types/get-feed-response";

@Injectable({
  providedIn: 'root'
})
export class SharedFeedService {

  constructor(private http:HttpClient) { }
  getFeed(url:string):Observable<GetFeedResponse>{
    const fullUrl=environment.apiUrl+url
    return  this.http.get<GetFeedResponse>(fullUrl)
  }
}
