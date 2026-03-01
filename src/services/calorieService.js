import { getFavourites } from "./storageService.js";

const favourites = getFavourites()
export function calcCalories(){
    
    let totalCal = 0
    for (const recipe of favourites){
        totalCal += recipe.caloriesPerServing
    }
    return totalCal
}