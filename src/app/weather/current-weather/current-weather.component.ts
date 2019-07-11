import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../../interfaces';

import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  // Current Weather Interface (city, country, date, image, temperature, description)
  currentWeather: ICurrentWeather

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherService.getCurrentWeather('Bijeljina', 'Bosnia and Herzegovina').subscribe((data) => {
      this.currentWeather = data;
    })
  }

}
