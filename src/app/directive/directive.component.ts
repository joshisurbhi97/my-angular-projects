import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
  displayName = false;
  hoverVar = false;
  displayElse = true;
  students = ['nirali','sarika','surbhi','kalyani','sonal']


  constructor() { }

  ngOnInit() {
  }

}
