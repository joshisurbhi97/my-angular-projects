import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
    <h3>you selected deapartment with id = {{departmentId}}</h3> 
    <a (click)="goPrevious()" class="btn btn-success">Previous</a>
    <a (click)="goNext()" class="btn btn-success ml-3">Next</a>

  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {
public departmentId;
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
     let id = parseInt(params.get('id'));
     this.departmentId = id;
    });
  }
  goPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['/computer',previousId])
  }
  goNext(){
    let nextId = this.departmentId + 1
    this.router.navigate(['/computer',nextId])
  }
}
