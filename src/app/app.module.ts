import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from "./material/material.module";
import { ReactiveFormsModule } from "@angular/forms";
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
    TwoChildComponent
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
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
