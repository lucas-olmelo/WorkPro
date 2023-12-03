import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
registerLocaleData(localePT);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { UserPostComponent } from './components/userPost/userPost.component';
import { CommunityPostComponent } from './components/community-post/community-post.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { VacancyComponent } from './components/vacancy/vacancy.component';
import { CurriculoComponent } from './pages/curriculo/curriculo.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { PedroComponent } from './components/curriculos/pedro/pedro.component';
import { LinsComponent } from './components/curriculos/lins/lins.component';
import { MeloComponent } from './components/curriculos/melo/melo.component';

import { NetworkComponent } from './pages/network/network.component';
import { LoginComponent } from './pages/login/login.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UserPostComponent,
    CommunityPostComponent,
    ProfileComponent,
    JobsComponent,
    VacancyComponent,
    CurriculoComponent,
    PedroComponent,
    LinsComponent,
    MeloComponent,,
    NetworkComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['http://localhost:8080'], // Altere para o domínio do seu backend
        disallowedRoutes: ['http://localhost:8080/auth/login'], // Altere para as rotas que não exigem token
      },
    }),
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
