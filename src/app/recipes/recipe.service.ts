import { Injectable } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Big Fat Burger',
      'What else you need to say?',
      'https://bigfatburgers.com/wp-content/uploads/2019/07/Cheese-Burger.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Fries', 20)]
    ),
    new Recipe(
      'Tasty Schnitzel',
      'A super-tasty Schnitzel. Just awesome!',
      'https://toriavey.com/images/2020/02/TOA20_03.jpeg',
      [new Ingredient('Schnitzel', 1), new Ingredient('Chips', 20)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  constructor(private shoppingListService: ShoppingListService) {}

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.AddIngredients(ingredients);
  }
}
