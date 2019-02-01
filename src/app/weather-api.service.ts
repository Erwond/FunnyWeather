import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from './currentWeatherModel';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class WeatherApiService {
  //private baseUrl = 'api.openweathermap.org'
  constructor(private http:HttpClient) { }
  baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
  apiKey = "&APPID=b0dbd3de679167bbdf36a62ca36071f1";

  getWeather(city: string): Observable<WeatherData>{
    return this.http.get<WeatherData>(this.baseUrl + city + this.apiKey);
  }
}
