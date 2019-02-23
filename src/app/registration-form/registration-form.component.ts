import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

export interface Course {
  name: string;
  sound: string;
}
export interface city {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  name = new FormControl('', Validators.required);
  pass = new FormControl('', Validators.required);


  constructor() { }

  ngOnInit() {
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  getErrorMessagename() {
    return this.name.hasError('required') ? 'You must enter a value' :
        
            '';
  }
  hide = true;
  getErrorMessagepass() {
    return this.pass.hasError('required') ? 'You must enter a value' :
        
            '';
  }
  courseControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  courses: Course[] = [
    {name: 'Web Development', sound: 'Woof!'},
    {name: 'Software testing', sound: 'Meow!'},
    {name: 'Networking', sound: 'Moo!'},
    {name: 'Web Designing', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];

  cities: city[] = [
    {value: 'steak-0', viewValue: 'Indore'},
    {value: 'pizza-1', viewValue: 'Pune'},
    {value: 'tacos-2', viewValue: 'Banglore'}
  ];
    
}
