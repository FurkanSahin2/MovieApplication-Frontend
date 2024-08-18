import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../models/movie';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from '../../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movies: Movie[] = [];
  dataLoaded = false;

  constructor(
    private movieService: MovieService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['categoryId']) {
        this.getMoviesByCategory(params['categoryId']);
      } else {
        this.getMovies();
      }
    });
  }

  getMovies() {
    this.movieService.getMovies().subscribe((response) => {
      this.movies = response.data;
      this.dataLoaded = true;
    });
  }

  getMoviesByCategory(categoryId: number) {
    this.movieService.getMoviesByCategory(categoryId).subscribe((response) => {
      this.movies = response.data;
      this.dataLoaded = true;
    });
  }
}
