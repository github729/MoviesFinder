import { Injectable } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  private apiKey = 'fed69657ba4cc6e1078d2a6a95f51c8c';

  constructor(private _http: HttpClient) {  }

  //Getting Genres from database
  getGenres() {
    return this._http.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiKey}&language=en-US`, )
    .pipe(
      catchError(this.handleError)
    );
  }

   //Getting Popular Movies from database
  getPopular() {
    return this._http.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=en-US`)
    .pipe(
      catchError(this.handleError)
    );
  }

  //Getting TopRated Movies from database
  getTopRatedMovies() {
    return this._http.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1`)
    .pipe(
      catchError(this.handleError)
    );
  }

  //Getting Search Result Movies from database based obn search text
  searchMovies(searchStr: string) {
    return this._http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&page=1&query=${searchStr}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  //Getting Movies from database by Genre Id
  getMoviesByGenre(id: string) {
    return this._http.get(`https://api.themoviedb.org/3/genre/${id}/movies?api_key=${this.apiKey}`)
    .pipe(
      catchError(this.handleError)
    );
  }
  
  //Getting Perticular Movie Reviews from database based on Movie Id
  getMovieReviews(id: string) {
    return this._http.get(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${this.apiKey}`,)
    .pipe(
      catchError(this.handleError)
    );
  }

  //Getting Perticular Movie Videos from database based on Movie Id
  getMovieVideos(id: string) {
    return this._http.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.apiKey}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  //Getting Similar Movies from database based on Movie Id
  getSimilarMovies(id: string) {
    return this._http.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${this.apiKey}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  //Getting Peticular Movie Credits from database based on Movie Id
  getMovieCredits(id: string) {
    return this._http.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${this.apiKey}`)
    .pipe(
      catchError(this.handleError)
    );
  }
  
  //Getting Peticular Movie  from database based on Movie Id
  getMovie(id: string) {
    return this._http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`)
    .pipe(
      catchError(this.handleError)
    );
  }


  //Error Handling Functionality
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Error: Unable to complete request. please try again later.');
  };
}
