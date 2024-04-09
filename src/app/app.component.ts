import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { Current, Forecast, Forecastday, Root } from './model/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'WeatherDel';

  constructor(private weatherService: WeatherService){}

  weatherData!: Forecast;
  todayWeatherData!: Current;
  curentDay!: Forecastday;
  
  city='gatineau';
  cityTitle=''

  ngOnInit(): void {
    this.getWeatherCity(this.city);
    this.cityTitle=this.city;
    this.city='';
  }

  onsubmit(){
    this.getWeatherCity(this.city);
    this.cityTitle=this.city;
  }

  private getWeatherCity(cityname:string){
    this.weatherService.getWeatherData(cityname).subscribe({
      next: (response) => {
        this.weatherData = response.forecast;        
        this.todayWeatherData = response.current;
        this.curentDay=this.weatherData.forecastday[0];
        console.log(this.curentDay);
      }
    })
  }

}
