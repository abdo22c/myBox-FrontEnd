import { Component,OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag'; 
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule , DataViewModule , TagModule , ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  files: any[] = [];

  constructor(private apiService: ApiserviceService) { }

  ngOnInit(): void {
    this.getAllFiles();
  }

  getAllFiles(): void {
    this.apiService.getAllFiles().subscribe(
      (response) => {
        this.files = response;
      },
      (error) => {
        console.error('Error fetching files:', error);
      }
    );
  }
}
