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
import { GuardService } from './guard.service';
import { ComputerComponent } from './computer/computer.component';
import { ScienceComponent } from './science/science.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { PostReactiveFormComponent } from './post-reactive-form/post-reactive-form.component';


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




  // {path:'',component:ServicesComponent}




//   { path: '', redirectTo: '/computer', pathMatch: 'full'},
//   // { path: '', component: ComputerComponent},
//   { path: 'computer', component: ComputerComponent},
// {
//    path: 'computer/:id', 
//    component: DepartmentDetailsComponent,
//    children: [
     
//      {path:'overview', component:DepartmentOverviewComponent},
//      {path:'contact', component:DepartmentContactComponent}
//    ]
//   },
//   { path: 'science', component: ScienceComponent},
//   { path: "**", component: PageNotFoundComponent},

  

//   {path:'',component:EmployeeListComponent},
// {path:'employeedetails/:usNm',component:EmployeeDetailsComponent, canActivate:[GuardService]},
//    {path:'forgotPassword', component:ForgotPasswordComponent, canActivate:[GuardService]},


  // {path:'',component:ReactiveFormComponent}



  // {path:'',component:CalculatorComponent}


  // {path:'',component:TemplateDrivenFormComponent}

    {path:'',component:PostReactiveFormComponent}



  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, AboutComponent, FormComponent, EmployeeListComponent, EmployeeDetailsComponent, ForgotPasswordComponent, DepartmentListComponent, ComputerComponent, ScienceComponent, PageNotFoundComponent, DepartmentDetailsComponent, DepartmentOverviewComponent, DepartmentContactComponent, CalculatorComponent, TemplateDrivenFormComponent, PostReactiveFormComponent]
