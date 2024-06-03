import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../models.ts/signup-model'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  user: User = {
    email: "",
    firstname: "",
    lastname: "",
    password: "",

  };

  onSubmit(): void {
    // form submitted
    console.log('user créé');

  }
}