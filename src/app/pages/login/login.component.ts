import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';

import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LogService } from '../../services/log/log.service';
import { ToastrService } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { RegistrationComponent } from '../../components/registration/registration.component';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatCardModule,
    RegistrationComponent,
    MatFormFieldModule,
    FormsModule, ReactiveFormsModule,
    ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  loginForm!: FormGroup
  constructor(private fb: FormBuilder, private http: HttpClient, private console: LogService, private toster: ToastrService,private authService:AuthService,
    private router:Router) {

  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      'username': [''],
      'password': ['']
    })
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next:(resp: any) => {
          this.console.log('login resp=>', resp)
          this.router.navigateByUrl('/home')
          this.toster.success(' Login  Successfully', 'Success')
        },
        error:(error: any) => {
          this.toster.error(error.error.error)
        }})
      
    }
  }
}
