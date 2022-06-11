import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { getMovieByName } from '../../../assets/movies/movies.js'

@Component({
  selector: 'app-movie-screen',
  templateUrl: './movie-screen.component.html',
  styleUrls: ['./movie-screen.component.scss'],
})
export class MovieScreenComponent {
  nombre
  name
  desc
  constructor(private route: ActivatedRoute, private router: Router) {
    this.name = this.route.url
    this.nombre = this.name._value[1].path

    this.desc = getMovieByName(this.nombre).desc
  }

  routing() {
    this.router.navigate([`/movies`])
  }
}
