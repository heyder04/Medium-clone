import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GlobalFeedComponent} from "./components/global-feed/global-feed.component";

const routes: Routes = [

  {path:'global-feed',
  component:GlobalFeedComponent},
  {path:'',
    redirectTo:'global-feed',
  pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalFeedRoutingModule { }
