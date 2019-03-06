import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
    FirstName:[''],
    LastName:[''],
    Password:['']
   })
  }
  submitData(){
    console.log(this.registration);
  }
}
