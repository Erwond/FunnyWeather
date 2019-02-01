import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChuckService {

  constructor(private http:HttpClient) { }
  baseUrl = "https://api.chucknorris.io/jokes/search?query=";

  getJoke(weather: string): Observable<any>{
    return this.http.get<any>(this.baseUrl + weather);
  }
}
