import { Component, Input } from '@angular/core';
import { FoodService } from '../service/food/food.service';

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
      let foods = this.foodService.getAllFoods();
      foods.flatMap(food => food.tags?food.tags:[])
      .sort()
      .map(tag=>{
        if(this.tagsCount.get(tag)){ 
          this.tagsCount.set(tag,this.tagsCount.get(tag)!+1);
        }else{
          this.tagsCount.set(tag,1);
        }
      })
  
      this.tagsCount.set("All",foods.flatMap(food=>food.tags).length);
    }
    
  }

}
