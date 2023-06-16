import { Component } from '@angular/core';
import { FoodService } from '../service/food/food.service';
import { Food } from '../shared/model/Food';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodDto } from '../shared/dto/Food.dto';

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

        let foodsObs!: Observable<FoodDto[]>;

        if(searchTerm){
          //foodsObs = this.foodService.searchFoodsBySearhTerm(searchTerm); 
        }else if(tag && tag != "All"){
          //foodsObs = this.foodService.searchFoodsByTag(tag);
        }else{
          foodsObs = this.foodService.getAllFoods();
        }

        foodsObs.subscribe(foodDtos=>{
          this.foods = foodDtos.map(foodDto => {
            return {...foodDto, id: parseInt(foodDto.id)}
          })
        })
  
    });

  }
}
