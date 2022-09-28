import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { PageListMessagesComponent } from './pages/page-list-messages/page-list-messages.component';



@NgModule({
  declarations: [
    PageListMessagesComponent,

  ],
  imports: [
    CommonModule,
    MessagesRoutingModule
  ],
  exports: [

  ]
})
export class MessagesModule { }
