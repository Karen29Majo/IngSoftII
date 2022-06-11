import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { movies } from '../../../assets/movies/movies.js'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  movie = new FormGroup({
    name: new FormControl(''),
  })

  moviesArr: any[] = movies

  moviesFiltered: any[] = movies

  constructor() {}

  filter() {
    this.moviesFiltered = this.moviesArr.filter((m) =>
      m.name
        .toLocaleLowerCase()
        .includes(this.movie.value.name.toLocaleLowerCase()),
    )
  }
}
