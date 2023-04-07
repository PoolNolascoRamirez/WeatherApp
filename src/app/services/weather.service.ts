import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';
import { environment } from 'src/environments/environment.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    const params = new HttpParams()
      .set('q', cityName)
      .set('appid', environment.apiKey)
      .set('units', 'metric');

    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, { params });
  }
}