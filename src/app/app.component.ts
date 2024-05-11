import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FridgeComponent } from './fridge/fridge.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, FridgeComponent], 
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}