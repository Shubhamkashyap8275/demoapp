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
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, CommonModule, HttpClientModule, ToastrModule, MatIconModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  previewImage = ''
  registrationForm!: FormGroup;
  ImageFile: any;
  constructor(private fb: FormBuilder, private http: HttpClient, private console: LogService, private toster: ToastrService) {

  }
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
    // this.getUser()
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
  onFileChange(event: any) {
    this.ImageFile=event.target.files[0]
    this.previewImage=URL.createObjectURL(event.target.files[0])
    this.console.log('file=>', this.previewImage )
  }

  register() {
    const formData=new FormData()
    if(this.previewImage){
      formData.append('userImage',this.ImageFile)
      formData.append('username',this.registrationForm.controls['username'].value)
      formData.append('email',this.registrationForm.controls['email'].value)
      formData.append('password',this.registrationForm.controls['password'].value)
    }
    if (this.registrationForm.valid) { 
      this.http.post(environment.apiUrl + 'register',formData).subscribe((resp) => {
        this.toster.success('Regestration is completed successfully', 'Success')
      })
    }
  }
  getUser(){
    this.http.get(environment.apiUrl + 'getUserDetail').subscribe((resp:any) => {
     this.console.log("all user==>",resp.user);
     
    })
  }
}
