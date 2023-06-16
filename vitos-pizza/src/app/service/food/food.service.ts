import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from 'src/app/shared/constants/urls';
import { FoodDto } from 'src/app/shared/dto/Food.dto';
import { Food } from 'src/app/shared/model/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  getAllFoods():Observable<FoodDto[]>{

      let foodsObs: Observable<FoodDto[]> =  this.http.get<FoodDto[]>(BASE_URL + '/api/product/list');
      
      return foodsObs;
  }

  findFoodById(id:number): Observable<FoodDto> {

    let foodsObs: Observable<FoodDto> =  this.http.get<FoodDto>(BASE_URL + '/api/product/'+id);
      
    return foodsObs;

  }

  // searchFoodsBySearhTerm(searchTerm:string): Food[] {

  //   return this.getAllFoods().filter(food=>food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())); 

  // }

  // searchFoodsByTag(tag:string): Food[] {

  //   return this.getAllFoods().filter(food=>food.tags?.includes(tag));

  // }

}
