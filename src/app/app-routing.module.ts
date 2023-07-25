import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeNotSelectedComponent } from "./recipes/recipe-not-selected/recipe-not-selected.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";

const appRoutes:Routes=[
    { path:'', redirectTo:'/recipes', pathMatch:'full'},
    { path:'shopping-list',component: ShoppingListComponent },
    { path:'recipes', component: RecipesComponent ,
children:[
    {path:'', component:RecipeNotSelectedComponent},
    {path:':id', component:RecipeDetailComponent}
]}
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRouteModule{

}