import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
login(usNm, pass){
console.log(usNm);
console.log(pass);
// this.router.navigate(['employeedetails', usNm]);
this.router.navigate(['employeedetails', usNm],
{
  queryParams :{
    id : 5
  }
}
);

}
}
