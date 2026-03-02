import { CallRecipes } from "./api/recipeProvider.js";
import { DetailsLayout, FavoritesLayout, MainLayout } from "./ui/components.js";
import { getRecipes,getFavourites } from "./services/storageService.js";
import { calcCalories } from "./services/calorieService.js";

const Router = {
    init(){
            const recipes = getRecipes()
            const favourites = getFavourites()
            const hash = window.location.hash;
            const root = document.getElementById("root")
            
                if (!hash || hash === "#/" || hash === "#/home") {
                            root.innerHTML = `${MainLayout(recipes)}`;
                    } else if(hash == "#/favourites"){
                        root.innerHTML = `${FavoritesLayout(favourites,calcCalories())}`
                    } else if(hash.startsWith("#/details")){
                        const id = hash.split("/")[2]
                        const recipe = recipes.find(item => item.id == id)
                        root.innerHTML = `${DetailsLayout(recipe)}`
                    }
    },
    nav: () => {

    }
}

export default Router;