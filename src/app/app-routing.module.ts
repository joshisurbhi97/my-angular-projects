import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FormComponent } from './form/form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { OneChildComponent } from './employee-list/one-child.component';
import { TwoChildComponent } from './employee-list/two-child.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  // { path: 'home', component: HomeComponent},
  // { path: 'about', component: AboutComponent},
  // { path: 'form', component: FormComponent},

  // {path:'',component:EmployeeListComponent}, 
  //  {path:'employeedetails/:usNm',component:EmployeeDetailsComponent},
  //  {path:'forgotPassword', component:ForgotPasswordComponent}



  // {
  //   path:'',component:EmployeeListComponent,
  //   children: [
  //     // {path: '', redirectTo: '/one', pathMatch: 'prefix'},
  //     {path: '', component:OneChildComponent},

  //     {path: 'one', component:OneChildComponent},
  //     {path: 'two', component:TwoChildComponent}

  //   ]
  // }, 
  //  {path:'employeedetails/:usNm',component:EmployeeDetailsComponent},
  //  {path:'forgotPassword', component:ForgotPasswordComponent},
  


    // { path: 'department-list', component: DepartmentListComponent}

  {path:'',component:ServicesComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AboutComponent, FormComponent, EmployeeListComponent, EmployeeDetailsComponent, ForgotPasswordComponent, DepartmentListComponent]
