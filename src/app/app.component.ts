import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, CommonModule]
})
export class AppComponent {
  title:string = 'MovieApplication';
  user:string = "Furkan Şahin";
  movie = {movieId: 1, movieName: "The Family", director: "Mr. Nobody"};
  movie2 = {movieId: 2, movieName: "The Family1", director: "Mr. Nobody"};
  movie3 = {movieId: 2, movieName: "The Family3", director: "Mr. Nobody"};
  movie4 = {movieId: 3, movieName: "The Family5", director: "Mr. Nobody"};
  movie5 = {movieId: 1, movieName: "The Family8", director: "Mr. Nobody"};
  movie6 = {movieId: 1, movieName: "The Family8", director: "Mr. Nobody"};

  movies = [this.movie, this.movie2, this.movie3, this.movie4, this.movie5, this.movie6];

}
