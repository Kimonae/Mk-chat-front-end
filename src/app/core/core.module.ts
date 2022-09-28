import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { UiModule } from '../ui/ui.module';
import { TemplatesModule } from '../templates/templates.module';
import { IconsModule } from '../icons/icons/icons.module';


@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    FooterComponent,

  ],
  imports: [CommonModule,
  RouterModule],
  exports: [UiModule, IconsModule, TemplatesModule, HeaderComponent, NavComponent, FooterComponent],

})
export class CoreModule { }
