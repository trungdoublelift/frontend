import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {SharedmoduleModule} from '../../../app/components/sharedmodule/sharedmodule.module'



@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedmoduleModule,
  
  ]
})
export class HomeModule { }
