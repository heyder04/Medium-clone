import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlobalFeedRoutingModule } from './global-feed-routing.module';
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';
import {SharedFeedModule} from "../shared/modules/shared-feed/shared-feed.module";
import {BannerModule} from "../shared/modules/banner/banner.module";


@NgModule({
  declarations: [
    GlobalFeedComponent
  ],
  imports: [
    CommonModule,
    GlobalFeedRoutingModule,
    SharedFeedModule,
    BannerModule
  ]
})
export class GlobalFeedModule { }
