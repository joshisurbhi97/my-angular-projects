import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-list',
  template: `
    <h3>Departments List</h3>
    <ul class="items">
    <li *ngFor="let department of departments">
    <span class="badge badge-success">{{department.id}}</span>{{department.name}}
    </li>
    </ul>

  `,
  styles: ['ul{list-style-type:none}']
})
export class DepartmentListComponent implements OnInit { 

  departments = [
    {"id":1, "name":"sita"},
    {"id":2, "name":"geeta"},
    {"id":3, "name":"radha"},
    {"id":4, "name":"parvati"},
    {"id":6, "name":"sarasvati"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
