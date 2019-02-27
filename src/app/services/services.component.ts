import { Component, OnInit } from '@angular/core';
import { PatientinfoService } from './patientinfo.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  patientList = [];
  constructor(private Patientinfo:PatientinfoService) {}

  ngOnInit() {
    this.patientList = this.Patientinfo.biodatas();
  }

}
