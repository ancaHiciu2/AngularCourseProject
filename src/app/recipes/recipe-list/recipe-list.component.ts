import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes : Recipe[]=[
    new Recipe("Recipe1", "Tzuchini recipe", "https://theabsolutefoodie.com/wp-content/uploads/2022/07/indian-zucchini-recipes.jpg"),
    new Recipe("Recipe2", "Tartar recipe", "https://www.inspiredtaste.net/wp-content/uploads/2019/02/Homemade-Tartar-Sauce-Recipe-1200.jpg"),
  ];

}
