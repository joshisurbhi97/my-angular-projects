// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
// export class EmployeeDetailsComponent implements OnInit {
  

//   constructor() {}
  export class EmployeeDetailsComponent implements OnInit ,OnDestroy{
    abc: string;
    sub :Subscription


  constructor(
    private activatedRoute : ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    // this.activatedRoute.params.subscribe( newParam => {
    //   this.abc = newParam['usNm']
    // })
    this.router.routerState.root.queryParams.subscribe(queryParamVar=>{
      this.abc = queryParamVar['ver']
    })
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
changeUsNm(chUsNm:string){
  console.log(chUsNm);
  this.router.navigate(['employeedetails', chUsNm])

}
}




