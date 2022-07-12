import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './views/layout/base/base.component';
import { AuthGuard } from './core/guard/auth.guard';
import { ErrorPageComponent } from './views/pages/error-page/error-page.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { AjouterEmployeeComponent } from './components/ajouter-employee/ajouter-employee.component';
import { EmployeeDetails } from './model/employee-details';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { DashboardComponent } from './views/pages/dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';


const routes: Routes = [
  { path:'auth', loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule) },
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {path: 'employees', component: EmployeesComponent,canActivate: [AuthGuard], },
      {path: 'ajouter_employee', component: AjouterEmployeeComponent,canActivate: [AuthGuard], },
      {path: 'employee_details/:id', component: EmployeeDetailsComponent},
      {path: 'update_employee/:id', component: UpdateEmployeeComponent ,canActivate: [AuthGuard], },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      // { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }

    ]},
  {
    path: 'error',
    component: ErrorPageComponent,
    data: {
      'type': 404,
      'title': 'Page Not Found',
      'desc': 'Oopps!! The page you were looking for doesn\'t exist.'
    }
  },
  {
    path: 'error/:type',
    component: ErrorPageComponent
  },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
