import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders ({
    'content-type':'application/json;charset=UTF-8'
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private http : HttpClient
  ) { }

  getAll():Observable<any>{
    const url = 'http://localhost:8081/city';
    return this.http.get(url,httpOptions).pipe(
    );
  }

  getName(nameCity):Observable<any>{
    const url = 'http://localhost:8081/name/'+nameCity;
    return this.http.get(url,httpOptions).pipe();
  }

  getCountryCode(countryCode):Observable<any>{
    const url = 'http://localhost:8081/country/'+countryCode;
    return this.http.get(url,httpOptions).pipe();
  }
  getDistrict(district):Observable<any>{
    const url = 'http://localhost:8081/district/'+district;
    return this.http.get(url,httpOptions).pipe();
  }
}
