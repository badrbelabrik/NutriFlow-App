export function getRecipes() {
    return JSON.parse(localStorage.getItem("recipes")) || []
}
export function setRecipes(recipes) {
    localStorage.setItem("recipes", JSON.stringify(recipes))
}