import { EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.module";
import { Ingredient } from "../shared/ingredient.module";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
  private  recipes: Recipe[] = [
        new Recipe(
        'Pasta', 
        'Mexican schzwano',
        'https://cdn3.tmbi.com/secure/RMS/attachments/37/300x300/exps25157_FM153592B03_18_12b.jpg ',
         [
             new Ingredient('Cheese', 2),
             new Ingredient('olives', 3)
         ] ),
        new Recipe(
        'Chocolate Tuffle', 
        'Tuffle layer Cake with extra chocos',
        'http://cdn-image.foodandwine.com/sites/default/files/styles/551x551/public/200609-r-xl-chocolate-truffle-layer-cake.jpg?itok=r4VWYrUO',
         [
             new Ingredient('chocochips', 6),
             new Ingredient('Mozotos', 7)
         ] )
        ];

getRecipes(){
    return this.recipes.slice();
}


}
