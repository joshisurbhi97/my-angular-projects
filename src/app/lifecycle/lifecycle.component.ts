import { Component, OnInit,  OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  myDt :string;


  constructor() {
    console.log('im in constructor');

   }

   ngOnChanges(sc){
    console.log('im in ngOnChanges');
    console.log(sc);

  }

  ngOnInit() {
    console.log('im in ngOnInit');

  }


  ngDoCheck(){
    console.log('im in ngDoCheck');

  }


  ngAfterContentInit(){
    console.log('im in ngAfterContentInit');

  }

  ngAfterContentChecked(){
    console.log('im in ngAfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('im in ngAfterViewInit');
  }

  ngAfterViewChecked(){
    console.log('im in ngAfterViewChecked');
  }

  ngOnDestroy(){
    console.log('im in ngOnDestroy');
  }

}
