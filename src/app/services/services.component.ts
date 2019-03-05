import { Component, OnInit } from '@angular/core';
import { PatientinfoService } from './patientinfo.service';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  patientList = [];
  id: string;
  joke:string;

  constructor(private patientinfo: PatientinfoService) {}

  ngOnInit() {
    this.patientList = this.patientinfo.biodatas();
    this.callGetMethod();

  }

  callGetMethod() {

    this.patientinfo.getMethod().subscribe(result => {
      console.log(result);
      console.log(result['value'].joke);
      this.joke = result['value'].joke
    })


    this.patientinfo.getMethod1().subscribe(result1 => {
      console.log(result1);
      console.log(result1['data'].id);
      this.id = result1['data'].id
    })
  }

}
