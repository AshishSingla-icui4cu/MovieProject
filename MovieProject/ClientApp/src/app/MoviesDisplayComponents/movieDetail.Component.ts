import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Movie } from '../Model/Movie';
import { MoviesStateManagement } from '../Services/MoviesStateManagement';

@Component({
  selector: 'movie-detail',
  templateUrl: './movieDetail.Component.html'
})
export class MovieDetailComponent implements OnInit {
  selectedMovie: Movie;
  constructor(private readonly route: ActivatedRoute, private readonly movieStateManagement: MoviesStateManagement) {
    //this.selectedMovie = movieStateManagement.MoviesRepo[0];
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      if (this.movieStateManagement.MoviesRepo) {
        this.selectedMovie = this.movieStateManagement.MoviesRepo.find(x => x.Id === +params["id"]);
      }
    });
    }
}
