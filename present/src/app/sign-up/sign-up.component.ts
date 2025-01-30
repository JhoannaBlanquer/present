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

  constructor(private auth : AuthService) {}

  ngOnInit(): void {
    
  }

  register() {
    if(this.email == '') {
      alert('Please enter email');
    return;
    }

    if(this.password == '') {
      alert('Please enter password');
    return;
    }

    this.auth.register(this.email,this.password);
    
    this.email;
    this.password;
  }
}
