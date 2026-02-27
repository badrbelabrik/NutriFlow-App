import { getFavourites } from "../services/storageService.js"
import { Card } from "./components.js"

export function ListCards(recipes){
    const recipesList = []
    const favourites = getFavourites()
    for(const recipe of recipes){
        const checkFav = favourites.find(item => item.id == recipe.id)
        const classGreen = checkFav ? "card-icon-green" : "";
        const cardDiv = Card(recipe,classGreen)
        recipesList.push(cardDiv)
    }
    return recipesList.join("")
}