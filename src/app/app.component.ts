import { Component } from '@angular/core';
import { MoviesService } from './services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public genres : any;

  constructor(private _moviesServices: MoviesService) {
    //Getting genres
    this._moviesServices.getGenres().subscribe(res => {
      this.genres = res['genres'].slice(0, 20);
    });
  }
}
