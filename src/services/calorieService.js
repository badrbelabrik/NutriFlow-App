import { getFavourites } from "./storageService.js";

const favourites = getFavourites()
export function calcCalories(){
    
    let totalCal = 0
    for (const recipe of favourites){
        totalCal += recipe.caloriesPerServing
    }
    return totalCal
}

export function getNutriBadge(calories) {
    if (calories < 400) {
        return "card-calorie-green";
    }
    if (calories <= 800) {
        return "card-calorie-orange";
    }
    return "card-calorie-red";
}