import { Routes } from '@angular/router';
import { AddfileComponent } from './addfile/addfile.component';
import { HomeComponent } from './home/home.component';
import {SendfileComponent} from './sendfile/sendfile.component';
import { LoginComponent } from './login/login.component';
import { SigginComponent } from './siggin/siggin.component';



export const routes: Routes = [

    { path: 'add', component: AddfileComponent },
    { path: 'S', component: SigginComponent },
    { path: 'Send', component: SendfileComponent },
    { path: 'L', component:  LoginComponent},
    { path: '', component: HomeComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' } 
    
];


