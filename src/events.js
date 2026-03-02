import { addToFav } from "./services/storageService.js"
import { searchRecipe } from "./ui/render.js"

export default function initEvents(){
    const root = document.getElementById("root")
root.addEventListener("click", function(e){
    const el = e.target
    if(el.closest(".card-icon")){
        const id = el.closest(".card-icon").dataset.fav
        addToFav(id)
        el.closest(".card-icon").classList.toggle("card-icon-red")
        return
    }
    if(el.closest(".card")){
        const id = el.closest(".card").dataset.id
        location.hash = "#/details/"+id

    }
    if(el.closest(".go-favourites")){
        console.log("you clicked the button to go to favourites")
        location.hash = "#/favourites"
    }
    if(el.closest(".go-home")){
        location.hash = "#/home"
    }
})

root.addEventListener("input", function(e){
    const el = e.target
    if(el.classList.contains("search-bar-input")){
        searchRecipe(el.value)
    }
})
}

