import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { UserPostComponent } from './components/userPost/userPost.component';
import { CommunityPostComponent } from './components/community-post/community-post.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import { JobsComponent } from './pages/jobs/jobs.component';
import { VacancyComponent } from './components/vacancy/vacancy.component';
import { CurriculoComponent } from './pages/curriculo/curriculo.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';



registerLocaleData(localePT);

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
    CurriculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
