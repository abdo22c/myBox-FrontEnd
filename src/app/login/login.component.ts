import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule , FormsModule , ButtonModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  Email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  onSubmit() {
    console.log('Email:', this.Email);
    console.log('Password:', this.password);
  }

  goToSignUp() {
    this.router.navigate(['/S']);
  }

}
