import { Ingredient } from "../shared/ingredient.module";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
  private  ingredients: Ingredient[] = [
        new Ingredient ( 'Apple', 5),
        new Ingredient ( 'Cake', 15),
        new Ingredient ( 'Eggs', 8)
    ];

    getIngredients(){
        return this.ingredients.slice();
    }
    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}
