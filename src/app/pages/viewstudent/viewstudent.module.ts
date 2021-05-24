import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewstudentRoutingModule } from './viewstudent-routing.module';
import { ViewstudentComponent } from './viewstudent.component';


@NgModule({
  declarations: [
    ViewstudentComponent
  ],
  imports: [
    CommonModule,
    ViewstudentRoutingModule
  ]
})
export class ViewstudentModule { }
