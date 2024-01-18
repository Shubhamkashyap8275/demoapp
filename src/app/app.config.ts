import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { provideAnimations } from '@angular/platform-browser/animations';

// import { routes } from '../app/app.routes';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations()]
};
