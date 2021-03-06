import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
    <h3>you selected deapartment with id = {{departmentId}}</h3> 
    <p>
        <button (click)="showOverview()">Overview</button>
        <button (click)="showContact()">Contact</button>

    </p>
    <router-outlet></router-outlet>

    <a (click)="goPrevious()" class="btn btn-success">Previous</a>
    <a (click)="goNext()" class="btn btn-success ml-3">Next</a>
    <div>
    <button (click)="gotoComputer()" type="button" class="btn btn-secondary">Back</button>
    </div>
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
    this.router.navigate(['/computer',previousId]);
  }
  goNext(){
    let nextId = this.departmentId + 1
    this.router.navigate(['/computer',nextId]);
  }
  gotoComputer(){
    let selectedId = this.departmentId ? this.departmentId: null;
    // this.router.navigate(['/computer', {id: selectedId}])
    this.router.navigate(['../', {id: selectedId}],  {relativeTo: this.route})

  }
  showOverview(){
    this.router.navigate(['overview'], {relativeTo: this.route});
  }
  showContact(){
    this.router.navigate(['contact'], {relativeTo: this.route});
  }
}
