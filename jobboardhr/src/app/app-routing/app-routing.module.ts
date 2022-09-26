import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../Shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { JobdetailsComponent } from '../jobdetails/jobdetails.component';
import { JobdescriptionComponent } from '../jobdescription/jobdescription.component';
import { ApplicationformComponent } from '../applicationform/applicationform.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'job-details',
    component: JobdetailsComponent,
    children: [
      { path: '', component: JobdescriptionComponent },
      { path: 'apply', component: ApplicationformComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
