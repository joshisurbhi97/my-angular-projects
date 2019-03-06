import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatIconModule} from '@angular/material/icon';



import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatRadioModule} from '@angular/material/radio';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatInputModule} from '@angular/material/input';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { StudentsComponent } from './students/students.component';
import { StudentComponent } from './students/student/student.component';
import { StudentService } from './shared/student.service';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { OneChildComponent } from './employee-list/one-child.component';
import { TwoChildComponent } from './employee-list/two-child.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { ServicesComponent } from './services/services.component';
import { HttpClientModule } from '@angular/common/http';
import { GuardService } from './guard.service';
import { DirectiveComponent } from './directive/directive.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ObservableComponent } from './observable/observable.component';
import { DuplicateArrayComponent } from './duplicate-array/duplicate-array.component';
import { ComputerComponent } from './computer/computer.component';
import { ScienceComponent } from './science/science.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CalculatorComponent } from './calculator/calculator.component';


// import { HomeComponent } from './home/home.component';
// import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    // HomeComponent,
    // AboutComponent
    routingComponents,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    ForgotPasswordComponent,
    StudentsComponent,
    StudentComponent,
    RegistrationFormComponent,
    OneChildComponent,
    TwoChildComponent,
    DepartmentListComponent,
    DepartmentDetailsComponent,
    ServicesComponent,
    DirectiveComponent,
    LifecycleComponent,
    ObservableComponent,
    DuplicateArrayComponent,
    ComputerComponent,
    ScienceComponent,
    PageNotFoundComponent,
    DepartmentOverviewComponent,
    DepartmentContactComponent,
    ReactiveFormComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatRadioModule,
    // MatFormFieldModule,
    // MatInputModule,
    MaterialModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule
  ],
  // providers: [StudentService],

  providers: [GuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
