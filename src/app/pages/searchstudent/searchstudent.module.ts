import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchstudentRoutingModule } from './searchstudent-routing.module';
import { SearchstudentComponent } from './searchstudent.component';
import {SharedmoduleModule} from '../../components/sharedmodule/sharedmodule.module'


@NgModule({
  declarations: [
    SearchstudentComponent,
  ],
  imports: [
    CommonModule,
    SearchstudentRoutingModule,
    SharedmoduleModule,
    
  ]
})
export class SearchstudentModule { }
