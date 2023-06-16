import { Component, Input } from '@angular/core';
import { Food } from '../shared/model/Food';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.css']
})
export class FoodDetailsComponent {

  @Input() food?:Food

}
