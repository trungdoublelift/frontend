import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatestudentRoutingModule } from './updatestudent-routing.module';
import { UpdatestudentComponent } from './updatestudent.component';


@NgModule({
  declarations: [
    UpdatestudentComponent
  ],
  imports: [
    CommonModule,
    UpdatestudentRoutingModule
  ]
})
export class UpdatestudentModule { }
