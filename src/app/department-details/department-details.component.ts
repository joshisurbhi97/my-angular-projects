import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
    <h3>you selected deapartment with id = {{departmentId}}</h3>
  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {
public departmentId;
  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.router.snapshot.paramMap.get('id'));
    this.departmentId = id;
  }

}
