export class WeatherData {
  constructor(json_weather_data: any) {
    this.coord = json_weather_data.coord;
    this.weather = json_weather_data.weather;
    this.base = json_weather_data.base;
    this.main = json_weather_data.main;
    this.visibility = json_weather_data.visibility;
    this.wind = json_weather_data.wind;
    this.clouds = json_weather_data.clouds;
    this.dt = json_weather_data.dt;
    this.sys = json_weather_data.sys;
    this.id = json_weather_data.id;
    this.name = json_weather_data.name;
    this.cod = json_weather_data.cod;
  }
  coord: Coord;
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  id: number;
  name: string;
  cod: number;
  
}

export class Coord{
  constructor(json_coord: any){
    this.lon = json_coord.lon;
    this.lat = json_coord.lat;
  }

  lon: number;
  lat: number;  
}

export class Weather {
  constructor(json_weather: any){
    this.id = json_weather.id;
    this.main = json_weather.main;
    this.description = json_weather.description;
    this.icon = json_weather.icon;
  }

  id: number;
  main: string;
  description: string;
  icon: string;
}

export class Main {
  constructor(json_main: any){
    this.temp = json_main.temp;
    this.pressure = json_main.pressure;
    this.humidity = json_main.humidity;
    this.temp_min = json_main.temp_min;
    this.temp_max = json_main.temp_max;;
  }

  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

export class Wind {
  constructor(json_wind: any){
    this.speed = json_wind.speed;
    this.deg = json_wind.deg;
  }

  speed: number;
  deg: number;
}

export class Clouds {
  constructor(json_clouds: any){
    this.all = json_clouds.all;
  }

  all: number;
}

export class Sys {
  constructor(json_sys: any){
    this.type = json_sys.type;
    this.id = json_sys.id;
    this.message = json_sys.message;
    this.country = json_sys.country;
    this.sunrise = json_sys.sunrise;
    this.sunset = json_sys.sunset;
  }

  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}