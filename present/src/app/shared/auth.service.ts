import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router : Router, private firestore: AngularFirestore) { }

  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password)
      .then(() => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['/home']);
      })
      .catch(err => {
        console.error('Login Error:', err.code, err.message); // Log the error for debugging
        alert('Login failed: ' + err.message);
        this.router.navigate(['/login']);
      });
  }
  
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        alert('Registration Successful');
        this.router.navigate(['/login']);
      })
      .catch(err => {
        console.error('Registration Error:', err.code, err.message); // Log the error for debugging
        alert('Registration failed: ' + err.message);
        this.router.navigate(['/sign-up']);
      });
  }
  
}
