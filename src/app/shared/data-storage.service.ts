import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";


import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import 'rxjs/add/operator/map';
import { AuthService } from "../auth/auth.service";


@Injectable()
export class DataStorageService{
constructor (private http: Http, 
    private recipeService: RecipeService,
    private authService: AuthService){
    
}

storeRecipes() {
return this.http.put('https://recipe-book-86475.firebaseio.com/recipes.json',
this.recipeService.getRecipes());
}

getRecipes(){
    this.http.get('https://recipe-book-86475.firebaseio.com/recipes.json')
    .map(
        (response: Response) =>{
            const recipes: Recipe[] = response.json();
            for(let recipe of recipes){
                if(!recipe['ingredients'])
                {
                    recipe['ingredients'] = [];
                }
            }
            return recipes;
        }
  )
    .subscribe(
        (recipes: Recipe[]) =>{
            
            this.recipeService.setRecipes(recipes);
        }
    );
}

}