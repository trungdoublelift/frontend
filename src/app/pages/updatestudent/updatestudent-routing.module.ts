import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatestudentComponent } from './updatestudent.component';

const routes: Routes = [{ path: '', component: UpdatestudentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatestudentRoutingModule { }
