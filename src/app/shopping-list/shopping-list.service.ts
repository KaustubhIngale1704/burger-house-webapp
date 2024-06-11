import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 10),
  ];

  ingredientAdded = new Subject<Ingredient[]>();
  startedAdding = new Subject<number>();

  AddIngredient(data: Ingredient) {
    this.ingredients.push(data);
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  AddIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientAdded.next(this.ingredients.slice());
  }
}
