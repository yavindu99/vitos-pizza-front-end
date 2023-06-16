import { CartItem } from "./CartItem";

export class Cart{

    cartItems: CartItem[] = [];

    get totalPrice(): number {
        
        return this.cartItems.reduce((acc, curr)=> acc+curr.getPrice(), 0)

    }
}