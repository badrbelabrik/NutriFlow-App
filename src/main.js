import { CallRecipes} from "./api/recipeProvider.js";
import Router from "./router.js";
import { getRecipes,setRecipes } from "./services/storageService.js";
import { clicks } from "./events.js";

async function initApp(){
    let recipes = getRecipes()
    if(!recipes || recipes.length === 0){
        recipes = await CallRecipes()
        setRecipes(recipes)
    }
    Router.init();
}


window.addEventListener("DOMContentLoaded", ()=>
    initApp(), );
window.addEventListener("hashchange", Router.init);