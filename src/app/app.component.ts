import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './components/movie/movie.component';
import { NaviComponent } from './components/navi/navi.component';
import { CategoryComponent } from './components/category/category.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterOutlet,
    CommonModule,
    MovieComponent,
    HttpClientModule,
    NaviComponent,
    CategoryComponent,
  ],
  providers: [MovieService],
})
export class AppComponent {
  title: string = 'MovieApplication';
  user: string = 'Furkan Şahin';
}
