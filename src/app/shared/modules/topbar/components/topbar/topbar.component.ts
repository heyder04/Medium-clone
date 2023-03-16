import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {CurrentUserInterface} from "../../../../types/current-user";
import {select, Store} from "@ngrx/store";
import {currentUser, isAnonymous, isLoggedIn} from "../../../../../auth/store/selectors";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit{
  currentUser$:Observable<CurrentUserInterface|null>;
  isAnonymous$:Observable<boolean>
  isLoggedIn$:Observable<boolean>
  constructor(private store:Store) {
  }
  ngOnInit() {
    this.isAnonymous$=this.store.pipe(select(isAnonymous));
    this.currentUser$=this.store.pipe(select(currentUser));
    this.isLoggedIn$=this.store.pipe(select(isLoggedIn));
  }
}
