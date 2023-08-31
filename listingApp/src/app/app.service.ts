import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }
  //Functions to Fetch data through api
  getUserData(){
    return this.http.get('http://localhost:3000/users');
  };
  getPaymentData(){
    return this.http.get('http://localhost:3000/payments');
  };
  getCountryData(){
    return this.http.get('http://localhost:3000/countries');
  };
}
