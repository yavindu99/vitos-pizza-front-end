import { Component } from '@angular/core';
import { FoodService } from '../service/food/food.service';
import { Food } from '../shared/model/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../service/cart/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent {

  food!:Food;
  tagsCount = new Map<string, number>

  constructor(private activatedRoute:ActivatedRoute, private foodService:FoodService,
     private cartService: CartService, private route: Router){
    
    this.activatedRoute.params.subscribe(params=>{
      
      let id:number = params["id"];

      //this.food = this.foodService.findFoodById(id);
      this.food.tags?.forEach(tag=>{
        if(this.tagsCount.get(tag)){
          this.tagsCount.set(tag,this.tagsCount.get(tag)!+1)
        }else{
          this.tagsCount.set(tag,1);
        }
      })

    })
  }

  addToCart(): void{
    this.cartService.addToCart(this.food);
    this.route.navigateByUrl("/cart-page")
  }

  ngOnInit():void{

    

  }

}
