import loader from "./ui/loader.js"
import {Card} from "./ui/components.js"
import { getRecipes} from "./api/recipeProvider.js";

const recipes = await getRecipes()
const root = document.getElementById("root")
root.innerHTML = `${Card()}`;
console.log(recipes)

