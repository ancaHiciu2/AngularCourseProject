import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map,tap} from "rxjs";
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

    fetchRecipes(){
     return this.http.get<Recipe[]>('https://coursedb-901e2-default-rtdb.firebaseio.com/recipes.json')
     .pipe(map(recipes=>{
        return recipes.map(recipe=>{
            return {...recipe,ingredients:recipe.ingredients?recipe.ingredients:[]};
        });
     }),
     tap(response=>{
        this.recipeService.setRecipes(response);
     }))
    } 
    }