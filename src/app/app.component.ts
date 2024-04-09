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
  daydate:string='';
  city='gatineau';
  cityTitle=''

  ngOnInit(): void {
    this.getWeatherCity(this.city);
    this.cityTitle=this.city;
    this.city='';
    const dateDuJour = new Date();
    const jour = dateDuJour.getDate();
    const moisNumero = dateDuJour.getMonth() + 1;
    
    let moisNom;
    
    switch (moisNumero) {
        case 1:
            moisNom = "Janvier";
            break;
        case 2:
            moisNom = "Février";
            break;
        case 3:
            moisNom = "Mars";
            break;
        case 4:
            moisNom = "Avril";
            break;
        case 5:
            moisNom = "Mai";
            break;
        case 6:
            moisNom = "Juin";
            break;
        case 7:
            moisNom = "Juillet";
            break;
        case 8:
            moisNom = "Août";
            break;
        case 9:
            moisNom = "Septembre";
            break;
        case 10:
            moisNom = "Octobre";
            break;
        case 11:
            moisNom = "Novembre";
            break;
        case 12:
            moisNom = "Décembre";
            break;
        default:
            moisNom = "Mois invalide";
    }    

    this.daydate=jour+' '+ moisNom ;
  }

  onsubmit(){
    this.getWeatherCity(this.city);
   
  }

  private getWeatherCity(cityname:string){
    this.weatherService.getWeatherData(cityname).subscribe({
      next: (response) => {
        this.weatherData = response.forecast;        
        this.todayWeatherData = response.current;
        this.curentDay=this.weatherData.forecastday[0];
        this.cityTitle=response.location.name+' '+response.location.country;
        console.log(this.curentDay);
      }
    })
  }

}
