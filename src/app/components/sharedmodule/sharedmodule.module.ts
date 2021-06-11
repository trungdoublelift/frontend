import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from '../../components/navbar/navbar.component'
import {FooterComponent} from '../../components/footer/footer.component'
import {InfotableComponent} from '../../components/infotable/infotable.component'
import {InputgroupComponent} from '../../components/inputgroup/inputgroup.component'
// import {UpdatemodalComponent} from '../../components/updatemodal/updatemodal.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NavbarComponent,FooterComponent,InfotableComponent,InputgroupComponent],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    InfotableComponent,
    InputgroupComponent,
    FormsModule,
    ReactiveFormsModule,
    // UpdatemodalComponent,
  ]
})
export class SharedmoduleModule { }
