import { Component, OnInit } from '@angular/core';
import { FormArray, FormArrayName, FormControl, FormControlName, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit{
id:number;
editMode=false;
recipeForm:FormGroup;
readonly ingredientsData='ingredientsData';

constructor(private route:ActivatedRoute,private recipeService:RecipesService) {}

ngOnInit(){
  this.route.params.subscribe(
    (params:Params)=>{
      this.id=+params['id'];
      this.editMode=params['id']!=null;
      this.initForm();
    }
  );
}

initForm(){
  let recipeName='';
  let recipeImagePath='';
  let recipeDescription='';
  let recipeIngredients=new FormArray([]);

  if(this.editMode)
  {
    const recipe=this.recipeService.getRecipe(this.id);
    recipeName=recipe.name;
    recipeImagePath=recipe.imagePath;
    recipeDescription=recipe.description;
    if(recipe['ingredients']){
      for(let ingred of recipe.ingredients)
      {
        recipeIngredients.push(new FormGroup({
          'name':new FormControl(ingred.name),
          'amount':new FormControl(ingred.amount)
        }))
      }
    }
  }
  this.recipeForm=new FormGroup({
    'name':new FormControl(recipeName),
    'imagePath' :new FormControl(recipeImagePath),
    'description':new FormControl(recipeDescription),
    ingredientsData:recipeIngredients
  });
}

onSubmit(){
console.log(this.recipeForm);
}

onAddIngredient():void{
  (<FormArray>this.recipeForm.get(this.ingredientsData)).controls.push(new FormGroup({
    'name': new FormControl(null),
    'amount':new FormControl(null)
  }))
}

get controls()
{
  return (<FormArray>this.recipeForm.get(this.ingredientsData)).controls;
}
}
