import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { PrimengModule } from '../primeng/primeng.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule, PrimengModule, FlexLayoutModule, RouterModule
  ]
})
export class DashboardModule { }
