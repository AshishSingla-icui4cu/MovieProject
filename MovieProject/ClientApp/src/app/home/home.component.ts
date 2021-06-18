import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors } from '@angular/forms';
import { Movie } from '../Model/Movie';
import { MoviesStateManagement } from '../Services/MoviesStateManagement';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  languages: any;
  locations: any;
  filterForm: FormGroup;
  movies: Movie[];

  constructor(private readonly httpClient: HttpClient, private readonly formBuilder: FormBuilder, private movieStateManagement: MoviesStateManagement) {
    this.httpClient.get<Movie[]>("https://localhost:5001/api/Movie/GetMovies").subscribe(x => {
      this.movieStateManagement.MoviesRepo = x;
      this.movies = x;
      
      this.languages = new Set(x.map(x => x.Language));
      
      this.locations = new Set(x.map(x => x.Location));

    }, error => console.log(error));
    
    this.createSearchFilters();
  }

  private createSearchFilters() {
    this.filterForm = this.formBuilder.group({
      byTitle: "",
      byLanguage: "",
      byLocation: ""
    }, { validator: this.searchLogic.bind(this) });
  }

  private searchLogic(fg: FormGroup): ValidationErrors | null {
    const values = fg.getRawValue();
    values.byTitle = values.byTitle ? values.byTitle : "";
    if (this.movieStateManagement.MoviesRepo) {

      if (values.byTitle && !values.byLocation && !values.byLanguage) {
        this.movies = this.movieStateManagement.MoviesRepo.filter(x =>
          x.Title.toLowerCase().includes(values.byTitle.toLowerCase()));
      }
      else if(values.byTitle  && values.byLocation && !values.byLanguage) {
        this.movies = this.movieStateManagement.MoviesRepo.filter(x =>
          x.Title.toLowerCase().includes(values.byTitle.toLowerCase()) &&
          x.Location.toLowerCase().includes(values.byLocation.toLowerCase())
        );
      }
      else if (values.byTitle && !values.byLocation && values.byLanguage) {
        this.movies = this.movieStateManagement.MoviesRepo.filter(x => x.Title.toLowerCase().includes(values.byTitle.toLowerCase()) &&
          x.Language.toLowerCase().includes(values.byLanguage.toLowerCase())
        );
      }
      else if (values.byTitle && values.byLocation && values.byLanguage){
        this.movies = this.movieStateManagement.MoviesRepo.filter(x =>  x.Title.toLowerCase().includes(values.byTitle.toLowerCase()) &&
        x.Language.toLowerCase().includes(values.byLanguage.toLowerCase()) &&
        x.Location.toLowerCase().includes(values.byLocation.toLowerCase())
      );
      }
      else if (!values.byTitle && values.byLocation && !values.byLanguage ) {
        this.movies = this.movieStateManagement.MoviesRepo.filter(x => x.Location.toLowerCase().includes(values.byLocation.toLowerCase()));
      }
      else if (!values.byTitle && !values.byLocation && values.byLanguage) {
        this.movies = this.movieStateManagement.MoviesRepo.filter(x => x.Language.toLowerCase().includes(values.byLanguage.toLowerCase()));
      }
      else if (!values.byTitle && values.byLocation && values.byLanguage) {
        this.movies = this.movieStateManagement.MoviesRepo.filter(x =>
          x.Language.toLowerCase().includes(values.byLanguage.toLowerCase()) &&
          x.Location.toLowerCase().includes(values.byLocation.toLowerCase()));
      }
      else {
        this.movies = this.movieStateManagement.MoviesRepo;
      }
    }

    return null;
  }
}
