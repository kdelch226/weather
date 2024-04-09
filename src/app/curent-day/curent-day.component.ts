import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, viewChild } from '@angular/core';
import { Forecastday, Hour } from '../model/weather.model';

@Component({
  selector: 'app-curent-day',
  templateUrl: './curent-day.component.html',
  styleUrls: ['./curent-day.component.css']
})
export class CurentDayComponent implements OnInit, AfterViewInit {
  @ViewChild('todayyContainer') todayyContainer!: ElementRef;
  @ViewChild('nowElement') nowElement!: ElementRef;


  @Input() todayInfo!: Forecastday;
  dayhours: Hour[] = [];
  todayhour = new Date().getHours();
  constructor() { }

  ngOnInit(): void {
    // Initialisation de dayhours lorsque todayInfo est défini
    if (this.todayInfo) {
      this.dayhours = this.todayInfo.hour;
    }
  }

  ngAfterViewInit(): void {
    const container = this.todayyContainer.nativeElement;
    const now = this.nowElement.nativeElement;
    container.scrollLeft = now.offsetLeft - (container.offsetWidth / 2) + (now.offsetWidth / 2);
  }
}
