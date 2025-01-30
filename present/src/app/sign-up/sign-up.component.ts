import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})

export class SignUpComponent implements OnInit{

  email : string = '';
  password : string = '';
  firstname : string = '';
  lastname : string = '';
  cpassword : string = '';
  showPassword: boolean = false;

  
  

  constructor(private auth : AuthService) {}

  ngOnInit(): void {
    
  }

  register() {
    if (this.email === '' || this.password === '' || this.firstname === '' || this.lastname === '' || this.cpassword === '') {
      alert('All fields are required');
      return;
    }

    if (this.password !== this.cpassword) {
      alert('Passwords do not match');
      return;
    }

    this.auth.register(this.email,this.password);
    
    this.firstname = '';
      this.lastname = '';
      this.email = '';
      this.password = '';
      this.cpassword = '';

  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
