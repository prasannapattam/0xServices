import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";

import { FabricModule } from "./fabric/FabricModule";
import { AppRouteModule } from "./AppRouteModule";
import { HomeModule } from "./home/HomeModule";
import { LayoutModule } from "./layout/LayoutModule";
import { JobModule } from "./job/JobModule";

import { AppComponent } from "./AppComponent";
import { AppStyles } from "./AppStyles";

import { FetchDataComponent } from "./components/fetchdata/fetchdata.component";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
    declarations: [
        AppComponent,
        AppStyles,
        CounterComponent,
        FetchDataComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        FlexLayoutModule,

        FabricModule,
        AppRouteModule,
        HomeModule,
        LayoutModule,
        JobModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}