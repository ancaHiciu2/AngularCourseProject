import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Recipe } from "../recipes/recipe-list/recipe.model";
import { RecipesService } from "../recipes/recipes.service";

@Injectable({providedIn:'root'})
export class DataStorageService{

    constructor(private http:HttpClient,private recipeService:RecipesService){
    }

    saveRecipes() :Observable<any>{
        const postData:Recipe[]=this.recipeService.getRecipes();
        return this.http.put('https://coursedb-901e2-default-rtdb.firebaseio.com/recipes.json',postData);
    }
}