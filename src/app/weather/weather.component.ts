import { WeatherService } from '../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  myWeather: any
  temperature: number = 0
  feelsliketemp: number = 0
  humidity: number = 0
  pressure: number = 0
  summary: number = 0
  iconUrls: string = 'https://openweathermap.org/img/wn/04n@2x.png'
  city: string = ''
  inits: string = 'metric'

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {

  }

  getClima() {
    this.weatherService.getweather(this.city, this.inits).subscribe({
      next: (res) => {
        console.log(res);
        this.myWeather = res
        console.log(this.myWeather)
        this.temperature = this.myWeather.main.temp
        this.feelsliketemp = this.myWeather.main.feels_like
        this.humidity = this.myWeather.main.humidity
        this.pressure = this.myWeather.main.pressure
        this.summary = this.myWeather.weather[0].main

        this.iconUrls = 'http://openweathermap.org/img/wn/' + this.myWeather.weather[0].icon + '@2x.png'
      },
      error: (error) => {
        alert('Cidade não encontrada!')
      },
      complete: () => console.info('API call completed')
    })
  }

}
