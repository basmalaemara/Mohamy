import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QaComponent } from './qa/qa.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },      // default: home
  { path: 'chat', component: QaComponent },    // Q&A page
  { path: '**', redirectTo: '' }
];
