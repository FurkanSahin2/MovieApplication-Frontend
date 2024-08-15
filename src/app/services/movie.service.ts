import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieResponseModel } from '../models/movieResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiUrl = 'https://localhost:7120/api/movies/getall';
  constructor(private httpClient: HttpClient) {}

  getMovies(): Observable<MovieResponseModel> {
    return this.httpClient.get<MovieResponseModel>(this.apiUrl);
  }
}
