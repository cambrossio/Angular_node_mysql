import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { LoginComponent } from './components/login/login.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { SingInComponent } from './components/sing-in/sing-in.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'logIn', component: LoginComponent},
  {path: 'singIn', component: SingInComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'maintenance', component: MaintenanceComponent},
  {path: 'errorPage', component: ErrorPageComponent},
  {path: '**', redirectTo:'/errorPage',pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
