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
export function Card(recipe,classGreen){
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
                    <i class="card-icon ${classGreen} fa-solid fa-heart" data-fav="${recipe.id}"></i>
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
                <button class="nav-flex go-home btn"><i class="nav-icon fa-solid fa-house"></i><p class="nav-title">Home</p></button>
                <button class="nav-flex go-details btn"><i class="nav-icon fa-solid fa-calendar-days"></i><p class="nav-title">Details</p></button>
                <button class="nav-flex go-favourites btn"><i class="nav-icon fa-solid fa-heart"></i><p class="nav-title">Favourites</p></button>
            </div>`
}

export function MainLayout(recipes){
    return `${Header()}
            ${SearchBar()}
            ${CardsContainer(recipes)}
            ${Navbar()}`
}
export function FavoritesLayout(favourites){
    return `${Header()}
            ${SearchBar()}
            ${CardsContainer(favourites)}
            ${Navbar()}`
}
export function DetailsLayout(){
    return `${Header()}
            ${SearchBar()}
            ${Navbar()}`
}