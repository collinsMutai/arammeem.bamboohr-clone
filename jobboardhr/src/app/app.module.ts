import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { SharedModule } from './Shared/shared.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { JobdetailsComponent } from './jobdetails/jobdetails.component';
import { JobdescriptionComponent } from './jobdescription/jobdescription.component';
import { ApplicationformComponent } from './applicationform/applicationform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobdetailsComponent,
    JobdescriptionComponent,
    ApplicationformComponent,
  
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
