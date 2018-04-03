import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PersonComponent} from './person/person.component';
import {ModuleWithProviders} from '@angular/core';

export const router: Routes = [
  { path: 'homes', component: HomeComponent },
  { path: 'people', component: PersonComponent }

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);



