// login.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // Replace this with your actual authentication logic
  login(username: string, password: string): boolean {
    // Simulate a successful login for demonstration purposes
    if (username === 'user' && password === 'password') {
      return true;
    } else {
      return false;
    }
  }
}
