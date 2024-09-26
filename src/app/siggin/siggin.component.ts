import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-siggin',
  standalone: true,
  imports: [CardModule,ButtonModule ,FormsModule],
  templateUrl: './siggin.component.html',
  styleUrl: './siggin.component.css'
})
export class SigginComponent {
  FirstName : String = '';
  LastName : String = '';
  Email: string = '';
  password: string = '';


  constructor( private router: Router ) {}

  onSubmit() {
    console.log(this.password);
   }

  goToLogin() {
    this.router.navigate(['/L']);
  }

}

