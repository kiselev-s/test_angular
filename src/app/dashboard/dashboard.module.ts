import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {RouterModule} from "@angular/router";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {MatTabsModule} from "@angular/material/tabs";
import { TestComponent } from './test/test.component';
import {HttpClientModule} from "@angular/common/http";
import { CalcComponent } from './calc/calc.component';


@NgModule({
  declarations: [
    DashboardComponent,
    TestComponent,
    CalcComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    MatTabsModule,
  ]
})
export class DashboardModule { }
