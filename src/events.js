import { addToFav } from "./services/storageService.js"
import { searchRecipe } from "./ui/render.js"

export const clicks = document.addEventListener("click", function(e){
    const el = e.target
    if(el.closest(".card-icon")){
        const id = el.closest(".card-icon").dataset.fav
        addToFav(id)
        el.closest(".card-icon").classList.toggle("card-icon-green")
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

export const inputs = document.addEventListener("keydown", function(e){
    const el = e.target
    if(e.key === "Enter" && el.classList.contains("search-bar-input")){
        const inputValue = el.value
        searchRecipe(inputValue)
    }
})
