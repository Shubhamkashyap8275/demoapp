import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule,
    MatButtonModule,
    MatCardModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  login() {
    // Add your authentication logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Replace the console.log statements with your actual authentication logic
  }
}
