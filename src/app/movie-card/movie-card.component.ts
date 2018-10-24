import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  // Components Comunication input variable
  @Input()  movie: any;
  
  constructor() { }

  ngOnInit() {
    console.log(this.movie)
  }

}
