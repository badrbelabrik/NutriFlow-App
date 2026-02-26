import { CallRecipes} from "./api/recipeProvider.js";
import Router from "./router.js";
import { getRecipes,getRecipesTimestamp,setRecipes } from "./services/storageService.js";

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

const root = document.addEventListener("click", function(e){
    const el = e.target
    if(el.closest(".card")){
        const id = el.closest(".card").dataset.id
        console.log("you clicked on a card that have id:"+ id)
    }
})

window.addEventListener("DOMContentLoaded", initApp);
window.addEventListener("hashchange", Router.init);