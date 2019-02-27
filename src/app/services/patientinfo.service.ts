import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PatientinfoService {
info = [];


  constructor(private httpClient : HttpClient) {}



  biodatas(){
    return this.info = [
      {"name":"surbhi", "age":21},
      {"name":"seeta", "age":24}
  
    ]
  }
}
