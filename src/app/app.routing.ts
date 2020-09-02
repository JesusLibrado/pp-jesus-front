import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        loadChildren: ()=>import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    },{
      path: 'sign-in',
      loadChildren: ()=>import('./sign-in/sign-in.module').then(m=>m.SignInModule)
    }
]; 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }