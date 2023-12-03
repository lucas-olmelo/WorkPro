import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { CurriculoComponent } from './pages/curriculo/curriculo.component';
import { NetworkComponent } from './pages/network/network.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'jobs',
    component: JobsComponent
  },
  {
    path: 'network',
    component: NetworkComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'resume',
    component: CurriculoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
