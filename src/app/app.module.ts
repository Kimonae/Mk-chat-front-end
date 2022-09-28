import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PageAddTchatroomComponent } from './tchatrooms/page-add-tchatroom/page-add-tchatroom.component';
import { PageEditTchatroomComponent } from './tchatrooms/page-edit-tchatroom/page-edit-tchatroom.component';
import { HttpClientModule } from '@angular/common/http';
import { TableLightComponent } from './shared/components/table-light/table-light/table-light.component';

@NgModule({
  declarations: [
    AppComponent,
    PageAddTchatroomComponent,
    PageEditTchatroomComponent,
    TableLightComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [

  ]
})
export class AppModule { }
