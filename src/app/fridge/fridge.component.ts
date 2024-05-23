import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css'],
  imports: [NavbarComponent],
  standalone: true
  
})
export class FridgeComponent {

}
