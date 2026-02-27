import { CallRecipes } from "./api/recipeProvider.js";
import { FavoritesLayout, MainLayout } from "./ui/components.js";
import { getRecipes,getFavourites } from "./services/storageService.js";

const Router = {
    init(){
            const recipes = getRecipes()
            const favourites = getFavourites()
            const hash = window.location.hash;
            const root = document.getElementById("root")
            
                if (!hash || hash === "#/" || hash === "#/home") {
                            root.innerHTML = `${MainLayout(recipes)}`;
                    } else if(hash == "#/favourites"){
                        root.innerHTML = `${FavoritesLayout(favourites)}`
                    }
    },
    nav: () => {

    }
}

export default Router;