import { Input } from "@angular/core";
import { Food } from "./Food";

export class CartItem{

    food: Food;
    quantity: number = 1;
    price: number = 0;

    constructor(food:Food){
        this.food = food;
    }

    set Quantity(quantity: number){

        this.quantity = quantity;

    }

    getPrice(): number {

        this.price =  this.quantity * this.food.price;

        return this.price;

    }

}