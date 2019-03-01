import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';

// import { Observable, interval } from 'rxjs';  


@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //  const myNo = Observable.interval(100)
    // myNo.subscribe((number:number )=>{
    //   console.log(number);
    // })



    const myObserver = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first step')
      }, 1000);
      setTimeout(() => {
        observer.next('2 step')
      }, 4000);
      setTimeout(() => {
        observer.error('error find')
      }, 6000);
    });
    myObserver.subscribe(
      (data: string) => {
        console.log("data ", data);

      },
      (error: string) => {
        console.log("error ", error);

      }
    )
  }


}
