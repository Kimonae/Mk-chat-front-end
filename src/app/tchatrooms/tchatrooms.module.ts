import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListTchatroomComponent } from './page-list-tchatroom/page-list-tchatroom.component';



@NgModule({
  declarations: [PageListTchatroomComponent],
  imports: [
    CommonModule
  ],
  exports:[PageListTchatroomComponent]

})
export class TchatroomsModule { }
