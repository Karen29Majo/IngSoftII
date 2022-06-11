import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  @Input() name: String

  constructor(private route: Router) {}

  routing() {
    const nameRouting = this.name
    this.route.navigate([`/movies/${nameRouting}`])
  }
}
