import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { ContactComponent } from './pages/contact/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
];
