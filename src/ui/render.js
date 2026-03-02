import { getRecipes,getFavourites } from "../services/storageService.js"
import { Card,MainLayout} from "./components.js"

export function ListCards(recipes){
    const recipesList = []
    const favourites = getFavourites()
    for(const recipe of recipes){
        const checkFav = favourites.find(item => item.id == recipe.id)
        const classGreen = checkFav ? "card-icon-red" : "";
        const cardDiv = Card(recipe,classGreen)
        recipesList.push(cardDiv)
    }
    return recipesList.join("")
}

export function searchRecipe(inputValue){
    const recipes = getRecipes()
    const found = recipes.filter(item => (item.name.toLowerCase()).includes((inputValue.toLowerCase()))  )
    const container = document.querySelector(".cards-container")
    if(found.length>0){
        container.innerHTML = ListCards(found)
    } else{
        container.innerHTML = "<p>No recipe found</p>";
    }
}