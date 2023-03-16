import {Component, Input, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {getFeedAction} from "../store/actions/getFeed.action";
import {Observable} from "rxjs";
import {GetFeedResponse} from "../types/get-feed-response";
import {isErrorSelector, isFeedSelector, isLoadingSelector} from "../store/selectors";

@Component({
  selector: 'app-shared-feed',
  templateUrl: './shared-feed.component.html',
  styleUrls: ['./shared-feed.scss']
})
export class SharedFeed implements OnInit{
  @Input('url') urlProps:string;
  feed$: Observable<GetFeedResponse | null>
  error$: Observable<string | null>
  isLoading$: Observable<boolean>
  constructor(private store:Store) {
  }
  ngOnInit() {
    this.fetchData();
    this.initializeValues();

  }
  fetchData(){
    this.store.dispatch(getFeedAction({url:this.urlProps}))
  };
  initializeValues(){
    this.feed$ = this.store.pipe(select(isFeedSelector))
    this.error$ = this.store.pipe(select(isErrorSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
  }
}
