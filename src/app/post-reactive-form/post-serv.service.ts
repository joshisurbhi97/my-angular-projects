import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostServService {
  

  constructor(private http: HttpClient) { }


  postForm(form) {
    return this.http.post('https://reqres.in/api/login', form, {
      // headers: new HttpHeaders().set('Content-Type', 'application/json')
    })
  }
}
