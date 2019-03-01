import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-department-list',
  template: `
    <h3>Departments List</h3>
    <ul class="items">
    <li (click)="onSelect(department)" *ngFor="let department of departments">
    <span class="badge badge-success">{{department.id}}</span>{{department.name}}
    </li>
    </ul>

  `,
  styles: ['.items{list-style-type:none;width:500px;}', 'li span{ padding:7px;background:purple;margin-right:8px;}', 'li{background:gray; width:100px;margin:10px;color:#fff;}']
})
export class DepartmentListComponent implements OnInit { 

  departments = [
    {"id":1, "name":"sita"},
    {"id":2, "name":"geeta"},
    {"id":3, "name":"radha"},
    {"id":4, "name":"parvati"},
    {"id":6, "name":"sarasvati"}
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }
onSelect(department){
this.router.navigate(['/computer', department.id]);
}
}
