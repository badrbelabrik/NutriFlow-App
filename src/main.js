import loader from "./ui/loader.js"
import {Header,SearchBar,CardsContainer,Navbar} from "./ui/components.js"
import { CallRecipes} from "./api/recipeProvider.js";

const recipes = await CallRecipes()
const root = document.getElementById("root")
root.innerHTML = `${Header()}
                    ${SearchBar()}
                    ${CardsContainer(recipes)}
                    ${Navbar()}`;


