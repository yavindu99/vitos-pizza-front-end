import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/model/Cart';
import { CartItem } from 'src/app/shared/model/CartItem';
import { Food } from 'src/app/shared/model/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = new Cart();

  constructor() { }

  addToCart(food: Food): void {

    let exisitingItem = this.cart.cartItems.find(item => item.food.id === food.id);

    if(!exisitingItem){
      this.cart.cartItems.push(new CartItem(food));
    }

  }

  changeQuantity(foodId: number, quantity: number): void {

    let exisitingItem = this.cart.cartItems.find(item => item.food.id === foodId);

    exisitingItem!.quantity = quantity;

  }

  getCart(): Cart {

    return this.cart;

  }

  removeCartItem(foodId: number): void{

    this.cart.cartItems = this.cart.cartItems.filter(item => item.food.id !== foodId);

  }

}
