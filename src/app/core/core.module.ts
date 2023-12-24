import { NgModule, Optional, SkipSelf } from '@angular/core';
import { PrimengModule } from './primeng/primeng.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


const COMPONENTS = [MessagesComponent, ToolbarComponent]

const MODULES = [PrimengModule, FlexLayoutModule, RouterModule]

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, MODULES],
  exports: [COMPONENTS, MODULES]
})
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. Import this module in the AppModule.')
    }
  }
 }
