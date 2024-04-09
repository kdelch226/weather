import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Root } from '../model/weather.model';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  today=new Date();
  private readonly baseUrl = 'https://weatherapi-com.p.rapidapi.com/forecast.json';
  private readonly headers = new HttpHeaders({
    'X-RapidAPI-Key': 'a80feadc5cmsha4bc47acc9367bep16527bjsnf590f09daed5',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  });

  constructor(private http: HttpClient) { }

  getWeatherData(city: string): Observable<Root> {
    const url = `${this.baseUrl}?q=${city}&days=3`;
    return this.http.get<Root>(url, { headers: this.headers });
  }

}
