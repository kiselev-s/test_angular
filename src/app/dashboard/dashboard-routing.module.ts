import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";
import {MatTabsModule} from "@angular/material/tabs";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'converter',
        loadChildren: () => import('./converter/converter.module').then(m => m.ConverterModule),
      },
      {
        path: 'calc',
        loadChildren: () => import('./calc/calc.module').then(m => m.CalcModule),
      },
      {
        path: 'test',
        loadChildren: () => import('./test/test.module').then(m => m.TestModule),
      },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule
  ]
})
export class DashboardRoutingModule { }
