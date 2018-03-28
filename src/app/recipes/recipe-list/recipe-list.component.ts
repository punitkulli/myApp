import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
@Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
new Recipe('Pasta', 'Mexican schzwano',
'https://cdn3.tmbi.com/secure/RMS/attachments/37/300x300/exps25157_FM153592B03_18_12b.jpg ' ),
new Recipe('Chocolate Tuffle', 'Tuffle layer Cake with extra chocos',
'http://cdn-image.foodandwine.com/sites/default/files/styles/551x551/public/200609-r-xl-chocolate-truffle-layer-cake.jpg?itok=r4VWYrUO' )
];
  constructor() { }

  ngOnInit() {
  }
onRecipeSelected(recipe: Recipe) {
this.recipeWasSelected.emit(recipe);
}
}
