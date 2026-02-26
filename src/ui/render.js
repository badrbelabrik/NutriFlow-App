import { Card } from "./components.js"

export function ListCards(recipes){
    const recipesList = []
    for(const recipe of recipes){
        const cardDiv = Card(recipe)
        recipesList.push(cardDiv)
    }
    return recipesList.join("")
}