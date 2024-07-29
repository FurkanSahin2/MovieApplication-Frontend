import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';





@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})



export class MovieComponent {
  movie = { movieId: 1, movieName: 'The Family', director: 'Mr. Nobody' };
  movie2 = { movieId: 2, movieName: 'The Family1', director: 'Mr. Nobody' };
  movie3 = { movieId: 2, movieName: 'The Family3', director: 'Mr. Nobody' };
  movie4 = { movieId: 3, movieName: 'The Family5', director: 'Mr. Nobody' };
  movie5 = { movieId: 1, movieName: 'The Family8', director: 'Mr. Nobody' };
  movie6 = { movieId: 1, movieName: 'The Family8', director: 'Mr. Nobody' };

  movies = [
    this.movie,
    this.movie2,
    this.movie3,
    this.movie4,
    this.movie5,
    this.movie6,
  ];
}
