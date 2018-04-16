import { Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs/Subject";

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>(); 

 private   recipes: Recipe[] = [
 new Recipe(
    'Black Choco Cup', 
    'Choco Tuffles',
    'https://wallpaperscraft.com/image/cake_strawberries_berry_dessert_95911_1920x1080.jpg',
[
    new Ingredient('Strawberries', 2),
    new Ingredient('Chocos', 20)
]),
new Recipe(
    'Paradise Pizza',
    'Italino' ,
    'https://wallpaperscraft.com/image/pizza_food_baked_goods_meat_82005_1920x1080.jpg',
[
    new Ingredient('Pepper', 3),
    new Ingredient('Coka Cola', 3)
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

/*Submitting Recipe Edit Form*/ 

addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
}

updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
}

deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
}




}