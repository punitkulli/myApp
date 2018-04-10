import { Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    

 private   recipes: Recipe[] = [
 new Recipe(
    'Black Forest', 
    'Choco Tuffles',
    'https://i.ytimg.com/vi/dsJtgmAhFF4/maxresdefault.jpg',
[
    new Ingredient('shampion', 2),
    new Ingredient('French Fries', 20)
]),
new Recipe(
    'Cheesey Pasta',
    'Italino' ,
    'https://www.sensibus.com/deli/sites/sensibus.com/files/recipes/pasta-dish-2_0.jpg',
[
    new Ingredient('Burger', 3),
    new Ingredient('coka cola', 3)
])
];

constructor(private slService: ShoppingListService){

}
    
getRecipes(){
return this.recipes.slice();
}

getRecipe(index: number) {
return this.recipes[index];
}

addIngredientsToShoppingList(ingredients: Ingredient[]){
this.slService.addIngredients(ingredients);
}
}