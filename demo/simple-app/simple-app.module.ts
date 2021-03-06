import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";


import {SimpleAppComponent} from "./simple-app.component";
import {HeroDashboardModule} from "./hero-dashboard";
import {RouterModule} from "@angular/router";
import {HeroListModule} from "./hero-list/";
import {HeroDetailModule} from "./hero-detail/";

@NgModule({
  declarations: [
    SimpleAppComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    HeroDetailModule,
    RouterModule,
    HeroListModule,
    HeroDashboardModule
  ],
  exports: [SimpleAppComponent]
})
export class SimpleAppModule {


}
