import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  myForm: NgForm
  user = {
    FirstName: '',
    LastName: '',
    Password: ''
  }




  constructor() { }

  ngOnInit() {
  }


  onSubmit(Form:NgForm){
  console.log(Form);
  }
}
