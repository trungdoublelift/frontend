import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedmoduleModule} from '../../components/sharedmodule/sharedmodule.module'
import { AddstudentRoutingModule } from './addstudent-routing.module';
import { AddstudentComponent } from './addstudent.component';


@NgModule({
  declarations: [
    AddstudentComponent
  ],
  imports: [
    CommonModule,
    AddstudentRoutingModule,
    SharedmoduleModule,
  ]
})
export class AddstudentModule { }
