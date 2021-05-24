import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchstudentComponent } from './searchstudent.component';

const routes: Routes = [{ path: '', component: SearchstudentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchstudentRoutingModule { }
