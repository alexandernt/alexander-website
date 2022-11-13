const navIcon = document.querySelector('.nav__icon')
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const navContainer = document.querySelector('.nav__container')
const skillsContent = document.getElementsByClassName("skills__content");
const skillsHeader = document.querySelectorAll('.skills__header');
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');
const html = document.documentElement
const main = document.querySelectorAll('.main')
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

/*-------------------------------Skills---------------------------------*/

function toggleSkills() {
    let itemClass = this.parentNode.className
    console.log(this.parentNode.className)
    for (i = 0; i < skillsContent.length; i++) {
        if (itemClass === 'skills__content skills__close') this.parentNode.className = 'skills__content skills__open' 
        if (itemClass === 'skills__content skills__open') this.parentNode.className = 'skills__content skills__close'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
});

/*-------------------------------Qualifications---------------------------------*/
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})
