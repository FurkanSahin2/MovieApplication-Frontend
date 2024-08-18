import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';
import { ListResponseModel } from '../models/listResponseModel';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiUrl = 'https://localhost:7120/api/';

  constructor(private httpClient: HttpClient) {}

  getMovies(): Observable<ListResponseModel<Movie>> {
    let newPath = this.apiUrl + 'movies/getall';
    return this.httpClient.get<ListResponseModel<Movie>>(newPath, {
      headers: {
        Authorization:
          'Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIwMDIiLCJlbWFpbCI6ImFsaWluY2UuMDAwMDAwNUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiRnVya2FuIFNhaGluIiwibmJmIjoxNzIzOTg0MzAzLCJleHAiOjE3MjM5ODQ5MDMsImlzcyI6ImZ1cmthbkBmdXJrYW4uY29tIiwiYXVkIjoiZnVya2FuQGZ1cmthbi5jb20ifQ.GGRJ0PIpBWB9Mf6tFw8oyVlPvkagBAsoPUfsC6D4dpA',
      },
    });
  }

  getMoviesByCategory(
    categoryId: number
  ): Observable<ListResponseModel<Movie>> {
    let newPath = this.apiUrl + 'movies/getbycategory?categoryId=' + categoryId;
    return this.httpClient.get<ListResponseModel<Movie>>(newPath, {
      headers: {
        Authorization:
          'Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIwMDIiLCJlbWFpbCI6ImFsaWluY2UuMDAwMDAwNUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiRnVya2FuIFNhaGluIiwibmJmIjoxNzIzOTg0MzAzLCJleHAiOjE3MjM5ODQ5MDMsImlzcyI6ImZ1cmthbkBmdXJrYW4uY29tIiwiYXVkIjoiZnVya2FuQGZ1cmthbi5jb20ifQ.GGRJ0PIpBWB9Mf6tFw8oyVlPvkagBAsoPUfsC6D4dpA',
      },
    });
  }
}
