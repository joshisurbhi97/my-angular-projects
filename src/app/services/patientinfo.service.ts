import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpParams } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PatientinfoService {
info = [];
id: string;

  // constructor(private httpClient : HttpClient) {}
  constructor(private http: HttpClient){}



  biodatas(){
    return this.info = [
      {"name":"surbhi", "age":21},
      {"name":"seeta", "age":24}
  
    ]
  }
  getMethod(){
    return this.http.get('http://api.icndb.com/jokes/random');
 }
 // query params in get service syntax

  getMethod1(){
    return this.http.get('https://reqres.in/api/users/2',{
      params: new HttpParams().set('id',this.id)
    });
  
  }
  
}
