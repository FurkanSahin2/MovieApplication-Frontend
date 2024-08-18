import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MovieComponent,
  },
  {
    path: 'movies',
    component: MovieComponent,
  },
  {
    path: 'movies/category/:categoryId',
    component: MovieComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
