import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PostServService } from './post-serv.service';
import { Data } from './post-data';




@Component({
  selector: 'app-post-reactive-form',
  templateUrl: './post-reactive-form.component.html',
  styleUrls: ['./post-reactive-form.component.css']
})
export class PostReactiveFormComponent implements OnInit {

  postDataForm:FormGroup;


  constructor(private postservservice:PostServService,
    private fb: FormBuilder) { }

  ngOnInit() {
    // this.postDataForm = this.fb.group({
    //   email: [''],

    //   password:['']
    //  })
    this.postDataForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],

      password:['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(10)]]
     })
  }

  submitPostData(){
    let formData : Data = {} as Data;
    formData = this.postDataForm.value;
    this.postservservice.postForm(formData).subscribe(res =>{
      console.log(res);

    })
   }

}
