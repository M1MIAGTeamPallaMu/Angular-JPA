import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HomeService} from './home/home.service';
import {PersonService} from './person/person.service';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';
import {routes} from './app.router';
import { PersonDetailsComponent } from './person/person-details/person-details.component';
import { PersonFormComponent } from './person/person-form/person-form.component';
import {FormsModule} from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonComponent,
    PersonDetailsComponent,
    PersonFormComponent,
    MainPageComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    routes
  ],
  providers: [
    HomeService,
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
