import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  registration:FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
   this.registration = this.fb.group({
    FirstName:['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    LastName:['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
    Password:['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(10)]]
   })
  }
  submitData(){
    console.log(this.registration);
  }
}
