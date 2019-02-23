import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-child',
  template: `
    <p>
      two-child works!
    </p>

  `,
  styles: []
})
export class TwoChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
