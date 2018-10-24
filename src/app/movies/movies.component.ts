import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public popularList: Array<Object>;
  public topRatedList: Array<Object>;

  constructor(private _moviesService: MoviesService) { }

  ngOnInit() {

    //Getting Popular movies Data
    this._moviesService.getPopular().subscribe(res => {
      this.popularList = res['results'];
    });

    //Getting Top Rated movies Data
    this._moviesService.getTopRatedMovies().subscribe(res => {
      this.topRatedList = res['results'];
    });

  }

}
