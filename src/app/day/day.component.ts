import { Component, Input, OnInit } from '@angular/core';
import { Forecastday } from '../model/weather.model';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrl: './day.component.css'
})
export class DayComponent implements OnInit {
  @Input() days!: Forecastday;
  dayDate!: string;
  minTemp!: number;
  maxTemp!: number;
  jour = '';

  constructor() { }


  ngOnInit(): void {
    this.dayDate = this.days.date;
    this.minTemp = this.days.day.mintemp_c;
    this.maxTemp = this.days.day.maxtemp_c;

    let datee = new Date(this.dayDate);
    let dayOfWeek = datee.getDay();
  
    switch (dayOfWeek) {
      case 0:
        this.jour = "lun";
        break;
      case 1:
        this.jour = "mar";
        break;
      case 2:
        this.jour = "mer";
        break;
      case 3:
        this.jour = "jeu";
        break;
      case 4:
        this.jour = "ven";
        break;
      case 5:
        this.jour = "sam";
        break;
      case 6:
        this.jour = "dim";
        break;
      default:
        this.jour = "Erreur: Jour de la semaine non valide";
    }
    
  }
}
