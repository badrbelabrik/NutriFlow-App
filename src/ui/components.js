import { ListCards } from "./render.js"

export function Header(){
    return `<div class="header">
                <div class="header-content">
                <p class="header-main-title">Nutri-Flow</p>
                <p class="header-second-title">Find healthy recipes</p>
                </div>
                <img class="header-img" src="./images/logo.png" alt="">
            </div>`
}

export function SearchBar(){
    return `<div class="search-bar">
                <i class="search-bar-icon fa-solid fa-magnifying-glass"></i>
                <input class="search-bar-input" type="text" id="lname" name="lname" placeholder="Search">
                <i class="search-bar-icon fa-solid fa-microphone"></i>
            </div>`
}
export function Card(recipe){
    return `<div class="card" data-id="${recipe.id}">
                <div class="card-content">
                    <p class="card-title">${recipe.name}</p>
                    <div class="card-pills">
                        <div class="card-pill"><i class="fa-solid fa-clock"></i>${recipe.prepTimeMinutes}min</div>
                        <div class="card-pill"><i class="fa-solid fa-user"></i>${recipe.servings}</div>
                        <div class="card-pill"><i class="card-calorie-icon fa-solid fa-fire-flame-curved"></i>${recipe.caloriesPerServing}Kcal</div>
                    </div>
                </div>
                <div class="card-img-wrapper">
                    <img class="card-img" src="${recipe.image}" alt="${recipe.name}">
                    <i class="card-icon fa-regular fa-heart" data-fav="${recipe.id}"></i>
                </div>
            </div>`
}

export function CardsContainer(recipes){
    return `<div class="cards-container">
                ${ListCards(recipes)}
            </div>`
}

export function Navbar(){
    return `<div class="nav">
                <button class="btn"><i class="nav-icon fa-solid fa-house"></i></button>
                <button class="btn"><i class="nav-icon fa-solid fa-calendar-days"></i></button>
                <button class="btn"><i class="nav-icon fa-solid fa-heart"></i></button>
            </div>`
}