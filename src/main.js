import { CallRecipes} from "./api/recipeProvider.js";
import Router from "./router.js";
import { getRecipes,setRecipes } from "./services/storageService.js";
import { calcCalories } from "./services/calorieService.js";
import Loader from "./ui/loader.js";
import { Header,SearchBar,Navbar } from "./ui/components.js";
import initEvents from "./events.js";

async function initApp(){
    const root = document.getElementById("root")
    root.innerHTML = `  ${Header()}
                        ${SearchBar()}
                        ${Loader()}
                        ${Navbar()}`
    let recipes = getRecipes()
    if(!recipes || recipes.length === 0){
        await delay(1000)
        recipes = await CallRecipes()
        setRecipes(recipes)
    }
    Router.init();
    initEvents();
}
console.log(calcCalories())

window.addEventListener("DOMContentLoaded", ()=>
    initApp(), );
window.addEventListener("hashchange", Router.init);

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}