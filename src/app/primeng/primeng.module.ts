import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { TooltipModule } from 'primeng/tooltip';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

const MODULES = [
  ButtonModule,
  AccordionModule,
  TooltipModule,
  CardModule,
  ToolbarModule,
  InputTextModule,
  TableModule
]

@NgModule({
  imports: [
    MODULES
  ],
  exports: [MODULES]
})
export class PrimengModule { }
