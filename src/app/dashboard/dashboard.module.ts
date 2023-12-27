import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { PrimengModule } from '../primeng/primeng.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule, PrimengModule, FlexLayoutModule, DashboardRoutingModule
  ]
})
export class DashboardModule { }
