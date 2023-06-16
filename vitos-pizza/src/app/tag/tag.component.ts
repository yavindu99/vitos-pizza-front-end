import { Component, Input } from '@angular/core';
import { FoodService } from '../service/food/food.service';
import { FoodDto } from '../shared/dto/Food.dto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {

  constructor(private foodService:FoodService){}

  tagsCount = new Map<string, number>();
  @Input() singleImageTagsCount = new Map<string, number>();
  @Input() justifyContent = "center";

  ngOnInit():void{
    
    if(this.singleImageTagsCount.size == 0){
      let foodObs:Observable<FoodDto[]> = this.foodService.getAllFoods();

      foodObs.subscribe(foodDtos=>{
        foodDtos.flatMap(foodDto => foodDto.tags?foodDto.tags:[]).sort()
        .map(tag=>{
          if(this.tagsCount.get(tag)){ 
            this.tagsCount.set(tag,this.tagsCount.get(tag)!+1);
          }else{
            this.tagsCount.set(tag,1);
          }
        })

        this.tagsCount.set("All",foodDtos.flatMap(food=>food.tags).length);
      })
    }
  }

}
