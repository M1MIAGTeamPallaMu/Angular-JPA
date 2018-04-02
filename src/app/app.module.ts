import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HomeService} from './home/home.service';
import {PersonService} from './person/person.service';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HomeService,
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
