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
    VacancyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
