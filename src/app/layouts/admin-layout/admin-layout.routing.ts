import { Routes } from '@angular/router'

import { DashboardComponent } from '../../pages/dashboard/dashboard.component'
import { IconsComponent } from '../../pages/icons/icons.component'
import { MapsComponent } from '../../pages/maps/maps.component'
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component'
import { TablesComponent } from '../../pages/tables/tables.component'
import { MoviesComponent } from 'src/app/pages/movies/movies.component'
import { MovieScreenComponent } from 'src/app/pages/movie-screen/movie-screen.component'

export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'maps', component: MapsComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies/:name', component: MovieScreenComponent },
]
