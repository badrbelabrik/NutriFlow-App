import loader from "./ui/loader.js"
import {Header,SearchBar,Card,Navbar} from "./ui/components.js"
import { getRecipes} from "./api/recipeProvider.js";

// const recipes = await getRecipes()
const root = document.getElementById("root")
root.innerHTML = `  ${Header()}
                    ${SearchBar()}
                    ${Card()}
                    ${Navbar()}`;
// console.log(recipes)

