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

export function Card(){
    return `<div class="card">
                <div class="card-content">
                    <p class="card-title">Classic Margherita Pizza</p>
                    <img class="card-img" src="images/1.png" alt="">
                </div>
                <div class="pills">
                    <div class="pill"></div>
                    <div class="pill"></div>
                    <div class="pill"></div>
                </div>
            </div>`
}

export function Navbar(){
    return `<div class="nav">
                <button class="btn"><i class="nav-icon fa-solid fa-house"></i></button>
                <button class="btn"><i class="nav-icon fa-solid fa-calendar-days"></i></button>
                <button class="btn"><i class="nav-icon fa-solid fa-heart"></i></button>
            </div>`
}