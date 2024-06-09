const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
let chevronElem = document.querySelector('.chevron')
let subMenuElem = document.querySelector('.sub-menu')
let subMenuContainerElem = document.querySelector('.sub-menu-container')
let closeSideNavElem = document.querySelector('.close-side-nav')
let sideNavElem = document.querySelector('.side-nav')
let overlayElem = document.querySelector('.overlay')
let burgerIconElem = document.querySelector('.hamburger-icon')
let sideBasketElem = document.querySelector('.side-basket')
let closeSideBasketElem = document.querySelector('.close-side-basket')
let basketIconElem = document.querySelector('.basket-icon')

toggleThemeBtns.forEach(function (btn) {
    btn.addEventListener("click" , () => {
    if (localStorage.theme === "dark"){
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme" , "dark");
    }
})
})

let isClose = true
subMenuContainerElem.addEventListener('click',function () {
    if (isClose) {
        subMenuElem.style.display = 'block'
        chevronElem.style.transform = 'rotate(180deg)'
        subMenuContainerElem.style.marginBottom = '0px'
        isClose = false
    } else {
        subMenuElem.style.display = 'none'
        chevronElem.style.transform = 'rotate(360deg)'
        subMenuContainerElem.style.marginBottom = '8px'
        isClose = true
    }
})

closeSideNavElem.addEventListener('click', function () {
    sideNavElem.style.transform = 'translateX(256px)'
    sideNavElem.style.transition = 'transform .75s ease'
    overlayElem.style.display = 'none'
})

burgerIconElem.addEventListener('click', function () {
    sideNavElem.style.transform = 'translateX(0px)'
    sideNavElem.style.transition = 'transform .75s ease'
    overlayElem.style.display = 'block'
})

closeSideBasketElem.addEventListener('click',function () {
    sideBasketElem.style.transform = 'translateX(-256px)'
    sideBasketElem.style.transition = 'transform .75s ease'
    overlayElem.style.display = 'none'
})

basketIconElem.addEventListener('click',function () {
    sideBasketElem.style.transform = 'translateX(0px)'
    sideBasketElem.style.transition = 'transform .75s ease'
    overlayElem.style.display = 'block'
})