import { Component, Input } from '@angular/core';
import { ChuckService } from '../chuck.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent {

  constructor(private _chuckService: ChuckService) { }

  @Input()
  weatherDesc: string;

  jokes: any;
  randomNumber: number;
  randomJoke: any;
  loading: boolean;
  noJoke: boolean;

  getJoke() {
    this.loading = true
    this.noJoke = false;
    this._chuckService.getJoke(this.weatherDesc).subscribe(
      data => { this.jokes = data },
      err => {
        console.log(err);
      },
      () => {
        if(!this.jokes.total){
          this.noJoke = true;
        }
        console.log("Jokes finished loading");
        this.randomNumber = Math.floor(Math.random() * (this.jokes.total));
        this.randomJoke = this.jokes.result[this.randomNumber];
        this.loading = false
      }
    );
  }
}


