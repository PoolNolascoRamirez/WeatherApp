import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'WeatherApp';

  constructor(private weatherService: WeatherService){

  }

  cityName: string = 'Wellington'
  weatherData?: WeatherData; 

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    });
  }

}

// export class AppComponent implements OnInit {
//   cityName = 'Wellington';
//   weatherData: WeatherData | null = null;

//   constructor(private weatherService: WeatherService){}

//   ngOnInit(): void {
//     this.getWeatherData();
//   }

//   getWeatherData(): void {
//     this.weatherService.getWeatherData(this.cityName)
//       .subscribe(data => this.weatherData = data);
//   }
// }
