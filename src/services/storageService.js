export function getRecipes() {
    return JSON.parse(sessionStorage.getItem("recipes")) || []
}
export function setRecipes(recipes) {
    sessionStorage.setItem("recipes", JSON.stringify(recipes))
}

export function getFavourites(){
    return JSON.parse(localStorage.getItem("favourites")) || []
}
export function setFavourites(favourites){
    localStorage.setItem("favourites", JSON.stringify(favourites))
}

export function addToFav(id){
    const recipes = getRecipes()
    const favourites = getFavourites()
    const checkIfExist = favourites.find(item => item.id == id)
    if(!checkIfExist){
            const currentRecipe = recipes.find(item => item.id == id)
            favourites.push(currentRecipe)
            setFavourites(favourites)
    } else {
        const newFavourites = favourites.filter(item => item.id !== Number(id))
        setFavourites(newFavourites)
    }

}