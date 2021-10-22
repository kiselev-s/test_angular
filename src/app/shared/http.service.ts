import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPeopleResponse} from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public getPeople(): Observable<IPeopleResponse> {
    return this.http.get<IPeopleResponse>('https://swapi.dev/api/people/');
  }

  public getMoney(): any {
    return this.http.get<any>('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
  }
}
