import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    ShareButtonsModule,
    ShareIconsModule,
  NgbModule
 
  ],
  exports: [HeaderComponent,
    FooterComponent,
    ErrorComponent
  ]
})
export class SharedModule { }
