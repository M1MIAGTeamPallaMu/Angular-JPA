import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PersonComponent} from './person/person.component';
import {ModuleWithProviders} from '@angular/core';
import {PersonDetailsComponent} from './person/person-details/person-details.component';
import {PersonFormComponent} from './person/person-form/person-form.component';
import {MainPageComponent} from './main-page/main-page.component';

export const router: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'homes', component: HomeComponent },
  { path: 'people', component: PersonComponent },
  { path: 'people/add', component: PersonFormComponent },
  { path: 'people/:id', component: PersonDetailsComponent },

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);



