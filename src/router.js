import { CallRecipes } from "./api/recipeProvider.js";
import { MainLayout } from "./ui/components.js";
import { getRecipes } from "./services/storageService.js";

const Router = {
    init(){
            const recipes = getRecipes()
            const hash = window.location.hash;
            const root = document.getElementById("root")
            
                if (!hash || hash === "#/" || hash === "#/home") {
                            root.innerHTML = `${MainLayout(recipes)}`;
            }
    },
    nav: () => {

    }
}

export default Router;