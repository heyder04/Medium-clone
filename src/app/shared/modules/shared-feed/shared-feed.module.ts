import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedFeed } from './components/shared-feed';
import {EffectsModule} from "@ngrx/effects";
import {GetFeedEffect} from "./store/effects/getFeed.effect";
import {StoreModule} from "@ngrx/store";
import { reducers2} from "src/app/shared/modules/shared-feed/store/reducers";
import {SharedFeedService} from "./services/shared-feed.service";
import {RouterLink} from "@angular/router";
import {ErrorMessageModule} from "../error-message/error-message.module";
import {AuthModule} from "../../../auth/auth.module";
import {LoadingModule} from "../loading/loading.module";



@NgModule({
  declarations: [
    SharedFeed
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('feed', reducers2),
    EffectsModule.forFeature([
      GetFeedEffect
    ]),
    RouterLink,
    ErrorMessageModule,
    AuthModule,
    LoadingModule
  ],
  exports:[
    SharedFeed
  ],
  providers:[SharedFeedService]
})
export class SharedFeedModule { }
