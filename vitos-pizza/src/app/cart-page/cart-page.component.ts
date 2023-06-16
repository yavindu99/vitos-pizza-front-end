import { Component } from '@angular/core';
import { CartService } from '../service/cart/cart.service';
import { Cart } from '../shared/model/Cart';
import { CartItem } from '../shared/model/CartItem';
import { FoodService } from '../service/food/food.service';
import { Food } from '../shared/model/Food';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

  cart!: Cart;

  constructor(private cartSerivice: CartService){
    this.setCart();
  }

  setCart(): void {
  
    this.cart = this.cartSerivice.getCart();
  
  }

  changeQuantity(cartItem: CartItem, quantityInString: string): void{

    const quantity = parseInt(quantityInString)
    this.cartSerivice.changeQuantity(cartItem.food.id, quantity);
    this.setCart();

  }

  removeCartItem(cartItem: CartItem,): void {

    this.cartSerivice.removeCartItem(cartItem.food.id);
    this.setCart();
  
  }


}
