import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  apiUrl = 'https://localhost:7120/api/categories/getall';

  constructor(private httpClient: HttpClient) {}

  getCategories(): Observable<ListResponseModel<Category>> {
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl, {
      headers: {
        Authorization:
          'Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjIwMDIiLCJlbWFpbCI6ImFsaWluY2UuMDAwMDAwNUBnbWFpbC5jb20iLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiRnVya2FuIFNhaGluIiwibmJmIjoxNzIzOTY4MzYxLCJleHAiOjE3MjM5Njg5NjEsImlzcyI6ImZ1cmthbkBmdXJrYW4uY29tIiwiYXVkIjoiZnVya2FuQGZ1cmthbi5jb20ifQ.y1noSDq0-odQrLfy4GjQereLZotbchLwXuLvGmYedD8',
      },
    });
  }
}
