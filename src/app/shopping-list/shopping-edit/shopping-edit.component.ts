import { Component, OnDestroy, OnInit } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedAdding.subscribe(
      () => {}
    );
  }

  OnAddItem(form: NgForm) {
    const ingredient = new Ingredient(form.value.name, form.value.amount);

    this.shoppingListService.ingredientAdded.next([ingredient]);
  }
}
