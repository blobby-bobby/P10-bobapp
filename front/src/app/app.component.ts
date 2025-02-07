import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from './model/joke.model';
import { JokesService } from './services/jokes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public joke$: Observable<Joke | null> = this.jokesService.joke$();
  // Adding this comment to test the pipeline
  // this should trigger the CI/CD

  constructor(private jokesService: JokesService) {}

  public ngOnInit(): void {
    this.getRandomJoke();
  }

  public getRandomJoke(): void {
    this.jokesService.getRandomJoke();
  }
}
