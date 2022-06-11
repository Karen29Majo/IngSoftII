import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { ClipboardModule } from 'ngx-clipboard'

import { AdminLayoutRoutes } from './admin-layout.routing'
import { DashboardComponent } from '../../pages/dashboard/dashboard.component'
import { IconsComponent } from '../../pages/icons/icons.component'
import { MapsComponent } from '../../pages/maps/maps.component'
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component'
import { TablesComponent } from '../../pages/tables/tables.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { MoviesComponent } from 'src/app/pages/movies/movies.component'
import { MovieComponent } from 'src/app/pages/movie/movie.component'
import { MovieScreenComponent } from 'src/app/pages/movie-screen/movie-screen.component'

// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    MoviesComponent,
    MovieComponent,
    MovieScreenComponent,
  ],
})
export class AdminLayoutModule {}
