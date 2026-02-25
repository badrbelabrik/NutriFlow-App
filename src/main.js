import loader from "./ui/loader.js"
import {Card,Navbar} from "./ui/components.js"
import { getRecipes} from "./api/recipeProvider.js";

const recipes = await getRecipes()
const root = document.getElementById("root")
root.innerHTML = `${Card()}
                    ${Navbar()}`;
console.log(recipes)

