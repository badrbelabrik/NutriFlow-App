import { CallRecipes} from "./api/recipeProvider.js";
import Router from "./router.js";
import { getRecipes,getRecipesTimestamp,setRecipes } from "./services/storageService.js";
import { root } from "./events.js";

async function initApp(){
    let recipes = getRecipes()
    const timestamp = getRecipesTimestamp()
    const isExpired = !timestamp || Date.now() - timestamp > (24*60*60*1000)
    if(!recipes || recipes.length === 0 || isExpired){
        recipes = await CallRecipes()
        setRecipes(recipes)
    }
    Router.init();
}


window.addEventListener("DOMContentLoaded", initApp, root);
window.addEventListener("hashchange", Router.init);