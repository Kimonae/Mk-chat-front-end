import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { UiModule } from '../ui/ui.module';
import { TemplatesModule } from '../templates/templates.module';
import { IconsModule } from '../icons/icons/icons.module';
import { HeaderComponent } from './components/header/header.component';
import { FormMessageComponent } from './components/footer/components/form-message/form-message.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from '../messages/messages.module';


@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    FooterComponent,
    FormMessageComponent
  ],
  imports: [
  CommonModule,
  RouterModule,
  ReactiveFormsModule
],
  exports: [
    UiModule,
    IconsModule,
    TemplatesModule,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    MessagesModule
  ],

})
export class CoreModule { }
