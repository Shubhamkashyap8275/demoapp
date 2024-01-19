import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { environment } from '../../environments/environment.development';
import { LogService } from '../log.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, CommonModule, HttpClientModule,ToastrModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm!: FormGroup;
  constructor(private fb: FormBuilder, private http: HttpClient, private console: LogService, private toster: ToastrService) {

  }
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  get username() {
    return this.registrationForm.get('username');

  }
  get email() {
    return this.registrationForm.get('email');

  }
  get password() {
    return this.registrationForm.get('password');

  }

  register() {
    if (this.registrationForm.valid) {
      this.console.log('registrationForm==>', this.registrationForm)
      this.http.post(environment.apiUrl + 'register', this.registrationForm.value).subscribe((resp) => {
        this.toster.success('Regestration is completed successfully','Success')
      })
    }

  }
}
