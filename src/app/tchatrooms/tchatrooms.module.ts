import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListTchatroomComponent } from './page-list-tchatroom/page-list-tchatroom.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormTchatroomsComponent } from './page-add-tchatroom/form-tchatrooms/form-tchatrooms.component';
import { PageAddTchatroomComponent } from './page-add-tchatroom/page-add-tchatroom.component';



@NgModule({
  declarations: [
    FormTchatroomsComponent,
    PageListTchatroomComponent,
    PageAddTchatroomComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [

    PageListTchatroomComponent,
    PageAddTchatroomComponent
   ],
})
export class TchatroomsModule { }
