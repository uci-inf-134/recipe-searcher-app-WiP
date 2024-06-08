import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Ingredient } from '../ingredient';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css'],
  imports: [NavbarComponent, CommonModule, FormsModule],
  standalone: true
  
})
export class FridgeComponent {
  
  //testIngredient:Ingredient= new Ingredient("carrot", "a long carrot", "vegetable", 10, new Date("11-10-24"));
  allIngredients:Ingredient[] = [];

  //temporary variables for form input
  name: string = "";
  details: string = "";
  type: string = "";
  exDate:string = "";
  amount:number = 0;
  //stores current selected
  selected:Ingredient|null = null; 
  
  



  
  addIngredient() //adds an ingredient to the fridge
  {
    var temp = new Date(this.exDate);
    let item = new Ingredient(this.name, this.details, this.type, this.amount, temp);
    this.allIngredients.push(item);
  }

  removeIngredient(index:number) //removes an ingredient from the fridge
  {
    
    this.allIngredients.splice(index, 1);
  }

}
