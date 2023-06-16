import { Component } from '@angular/core';
import { FoodService } from '../service/food/food.service';
import { Food } from '../shared/model/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private foodService:FoodService, private route: ActivatedRoute){}
  foods: Food[] = [];
  
  ngOnInit(){

    this.route.params.subscribe(params=>{
        let searchTerm:string = params['searchTerm'];
        let tag:string = params['tag'];

        if(searchTerm){
          this.foods = this.foodService.searchFoodsBySearhTerm(searchTerm); 
        }else if(tag && tag != "All"){
          this.foods = this.foodService.searchFoodsByTag(tag);
        }else{
          this.foods = this.foodService.getAllFoods();
        }
    });

  }
}
