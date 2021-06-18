import { Component, Input } from '@angular/core';
import { Movie } from '../Model/Movie';

@Component({
  selector: 'movie-item',
  templateUrl: './movieItem.Component.html'
})
export class MovieItemComponent {
  @Input() movie: Movie;
}
