import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

public num1:number;
public num2:number;
public result:number;

  constructor() { }

  ngOnInit() {
  }



  sum(){
    this.result = this.num1 + this.num2;
    // console.log(this.result);
    
  }
  sub(){
    this.result = this.num1 - this.num2;

  }
  multi(){
    this.result = this.num1 * this.num2;

  }
  division(){
    this.result = (this.num1) / (this.num2);

  }
}
