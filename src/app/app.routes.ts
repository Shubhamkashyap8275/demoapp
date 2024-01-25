import { Routes } from '@angular/router';// import { routes } from '../app/app.routes';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './gaurds/authGuard';
export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', 
  canActivate: [authGuard],
  component: HomeComponent },
];