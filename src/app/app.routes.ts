import { Routes } from '@angular/router';// import { routes } from '../app/app.routes';
import { LoginComponent } from './login/login.component';
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];