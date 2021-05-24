import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home',loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),}, 
{ path: 'searchstudent', loadChildren: () => import('./pages/searchstudent/searchstudent.module').then(m => m.SearchstudentModule) },
 { path: 'addstudent', loadChildren: () => import('./pages/addstudent/addstudent.module').then(m => m.AddstudentModule) },
{ path: 'updatestudent', loadChildren: () => import('./pages/updatestudent/updatestudent.module').then(m => m.UpdatestudentModule) },
{ path: 'viewstudent', loadChildren: () => import('./pages/viewstudent/viewstudent.module').then(m => m.ViewstudentModule) }] 
 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
