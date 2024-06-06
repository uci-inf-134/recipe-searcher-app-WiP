import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Ingredient } from '../ingredient';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css'],
  imports: [NavbarComponent, CommonModule],
  standalone: true
  
})
export class FridgeComponent {
  
  testIngredient:Ingredient= new Ingredient("carrot", "a long carrot", "vegetable", 10, new Date("11-10-24"));
  allIngredients:Ingredient[] = [this.testIngredient];

  addIngredient(item: Ingredient) //adds an ingredient to the fridge
  {
    this.allIngredients.push(item);
  }

  removeIngredient(item:Ingredient) //removes an ingredient from the fridge
  {
    for(let i =0; i < this.allIngredients.length; i++)
      {
        if(this.allIngredients.at(i)?.ingredientName == item.ingredientName)
        {
          delete this.allIngredients[i];
        }  
      }
  }

}
