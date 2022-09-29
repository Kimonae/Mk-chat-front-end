import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormTchatroomsComponent } from './page-add-tchatroom/form-tchatrooms/form-tchatrooms.component';
import { PageAddTchatroomComponent } from './page-add-tchatroom/page-add-tchatroom.component';
import { PageEditTchatroomComponent } from './page-edit-tchatroom/page-edit-tchatroom.component';
import { PageListTchatroomComponent } from './page-list-tchatroom/page-list-tchatroom.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from '../core/components/nav/nav.component';



@NgModule({
  declarations: [
    FormTchatroomsComponent,
    PageAddTchatroomComponent,
    PageEditTchatroomComponent,
    PageListTchatroomComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class TchatroomsModule { }
