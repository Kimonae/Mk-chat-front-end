import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListTchatroomComponent } from './page-list-tchatroom/page-list-tchatroom.component';


const routes: Routes = [

{path : 'tchatroom/:id', component: PageListTchatroomComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
