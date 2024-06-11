import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingredientsChangedSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
    this.ingredientsChangedSubscription =
      this.shoppingListService.ingredientAdded.subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  ngOnDestroy() {
    this.ingredientsChangedSubscription.unsubscribe();
  }

  OnIngredientAdded(data: Ingredient) {
    this.shoppingListService.AddIngredient(data);
  }

  OnEditItem(index: number) {
    this.shoppingListService.startedAdding.next(index);
  }
}
