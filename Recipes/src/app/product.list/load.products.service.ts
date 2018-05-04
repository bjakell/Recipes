import { Injectable } from '@angular/core';
import { IRecipe } from './recipe';

@Injectable()
export class LoadProductsService {

  constructor() { }

  getProducts(url: string) : IRecipe[] {
    return [
        {
            "type": "Breakfast",
            "title": "Fried Chicken and Waffles",
            "servingSize": 4,
            "readyTime": 55,
            "difficulyRating": 2.5,
            "starRating": 4.5,
            "imageURL": "./assets/Chicken_and_Waffles.jpg"
        },
        {
            "type": "Breakfast",
            "title": "Pancakes",
            "servingSize": 4,
            "readyTime": 25,
            "difficulyRating": 1,
            "starRating": 5,
            "imageURL": "./assets/Pancakes.jpg"
        },
        {
            "type": "Breakfast",
            "title": "Eggs Benedict",
            "servingSize": 2,
            "readyTime": 30,
            "difficulyRating": 3.5,
            "starRating": 4,
            "imageURL": "./assets/Eggs_Benedict.jpg"
        },
        {
            "type": "Lunch",
            "title": "Tomato Bacon Grilled Cheese",
            "servingSize": 1,
            "readyTime": 10,
            "difficulyRating": 1,
            "starRating": 4.3,
            "imageURL": "./assets/Grilled_Cheese.jpg"
        },
        {
            "type": "Lunch",
            "title": "Grilled Fish Tacos",
            "servingSize": 6,
            "readyTime": 404,
            "difficulyRating": 4,
            "starRating": 4.5,
            "imageURL": "./assets/Grilled_Fish_Tacos.jpg"
        },
        {
            "type": "Lunch",
            "title": "Slow Cooker BBQ Chicken",
            "servingSize": 8,
            "readyTime": 395,
            "difficulyRating": 2,
            "starRating": 4.5,
            "imageURL": "./assets/BBQ_Chicken.jpg"
        },
        {
            "type": "Dinner",
            "title": "Lasagna",
            "servingSize": 12,
            "readyTime": 195,
            "difficulyRating": 4,
            "starRating": 5,
            "imageURL": "./assets/Lasagna.jpg"
        },
        {
            "type": "Dinner",
            "title": "Spicy Garlic Lime Chicken",
            "servingSize": 4,
            "readyTime": 25,
            "difficulyRating": 2.5,
            "starRating": 4.5,
            "imageURL": "./assets/Spicy_Garlic_Lime_Chicken.jpg"
        },
        {
            "type": "Dinner",
            "title": "Turkey Burgers",
            "servingSize": 12,
            "readyTime": 30,
            "difficulyRating": 1,
            "starRating": 3.5,
            "imageURL": "./assets/Turkey_Burger.jpg"
        },
        {
            "type": "Dinner",
            "title": "Enchiladas",
            "servingSize": 6,
            "readyTime": 60,
            "difficulyRating": 2,
            "starRating": 4,
            "imageURL": "./assets/Enchiladas.jpg"
        }
    ];
  }

}
