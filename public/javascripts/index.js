const navIcon = document.querySelector('.nav__icon')
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const navContainer = document.querySelector('.nav__container')
const html = document.documentElement
var width = screen.width
var height = screen.height

// This function will count the user clicks on the hamburguer
let clickCount = 1;
function doAction () {
    clickCount ++;
    if ((clickCount % 2) === 0){
        showMenu()
    } else { 
        removeMenu()
    }
}

function showMenu () {
    navContainer.classList.add("nav__container--active")
    html.classList.add('overflowy__hidden')
    // navBar.classList.add('hide-hamburger')
    // main.classList.add('back-dark')
    box2.classList.add('box-active')
    box3.classList.add('box3-dissapear')
    box2.classList.add('box2-rotate')
    box1.classList.add('box1-rotate')
    box1.classList.add('box-active')
}

function removeMenu () {
    navContainer.classList.remove("nav__container--active")
    html.classList.remove('overflowy__hidden')
    // navBar.classList.remove('hide-hamburger')
    // main.classList.remove('back-dark')
    box2.classList.remove('box-active')
    box3.classList.remove('box3-dissapear')
    box2.classList.remove('box2-rotate')
    box1.classList.remove('box1-rotate')
    box1.classList.remove('box-active')
}

navIcon.addEventListener('click', function() {
    doAction()
})