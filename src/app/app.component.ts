import { Component } from '@angular/core';
import { WeatherApiService } from './weather-api.service';
import { WeatherData } from './currentWeatherModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather';

  constructor(private _weatherService: WeatherApiService) { }

  weather: WeatherData;

  getWeather(event: any) {
      this._weatherService.getWeather(event.target.value).subscribe(
        data => { this.weather = data },
        err => {
          this.weather = null;
        },
        () => {
          this.weather.weather[0].icon = "http://openweathermap.org/img/w/" + this.weather.weather[0].icon + ".png"
          console.log("Weather finished loading")
        }
      );
  }
}
