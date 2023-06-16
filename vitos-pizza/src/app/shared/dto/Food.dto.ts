export class FoodDto{

    id!: string;
    name!: string;
    price!: number;
    tags?: string[];
    favorite: boolean = false;
    stars: number = 0;
    imageUrl!: String;
    origins!: string[];
    cookTime!: string;

}