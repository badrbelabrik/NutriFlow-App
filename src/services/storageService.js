export function getRecipes() {
    return JSON.parse(localStorage.getItem("recipes")) || []
}
export function getRecipesTimestamp() {
    return Number(localStorage.getItem("recipes_timestamp"))
}
export function setRecipes(recipes) {
    localStorage.setItem("recipes", JSON.stringify(recipes))
    localStorage.setItem("recipes_timestamp", Date.now())
}