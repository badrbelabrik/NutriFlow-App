import { addToFav } from "./services/storageService.js"

export const root = document.addEventListener("click", function(e){
    const el = e.target
    if(el.closest(".card-icon")){
        const id = el.closest(".card-icon").dataset.fav
        addToFav(id)
        el.closest(".card-icon").classList.toggle("card-icon-green")
        return
    }
    if(el.closest(".card")){
        const id = el.closest(".card").dataset.id
        console.log("you clicked on the card with id:"+id)
    }
})