import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one-child',
  template: `
    <p>
      one-child works!
    </p>

  `,
  styles: []
})
export class OneChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
