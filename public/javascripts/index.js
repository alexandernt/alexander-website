const html = document.documentElement
const main = document.querySelectorAll('.main')
var width = screen.width
var height = screen.height

/*------------------------------- Menu ---------------------------------*/

// Variables
const navIcon = document.querySelector('.nav__icon')
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const navContainer = document.querySelector('.nav__container')
const skillsContent = document.getElementsByClassName("skills__content");

// Show Menu Function
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

// Remove Menu Function
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

// This function will count the user clicks on the hamburguer and show or remove menu
let clickCount = 1;
function doAction () {
    clickCount ++;
    if ((clickCount % 2) === 0){
        showMenu()
    } else { 
        removeMenu()
    }
}

// Calling doAction function and showing or removing menu (final function)
navIcon.addEventListener('click', function() {
    doAction()
})

/*-------------------------------Skills---------------------------------*/

// Variables
const skillsHeader = document.querySelectorAll('.skills__header');

// Main Function
function toggleSkills() {
    let itemClass = this.parentNode.className
    console.log(this.parentNode.className)
    for (i = 0; i < skillsContent.length; i++) {
        if (itemClass === 'skills__content skills__close') this.parentNode.className = 'skills__content skills__open' 
        if (itemClass === 'skills__content skills__open') this.parentNode.className = 'skills__content skills__close'
    }
}

// For each header, apply the toggleSkills function
skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
});

/*-------------------------------Qualifications---------------------------------*/
// Variables
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

// Main function
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

/*-------------------------------FAQs---------------------------------*/

// Variables
const faqsTemplate = document.querySelectorAll('.faqs__template')
const faqsHeader = document.querySelectorAll('.faqs__template--header')

// Main Function
function toggleFaqs() {
    let itemClass = this.parentNode.className
    for (i = 0; i < faqsTemplate.length; i++) {
        if (itemClass === 'faqs__template faqs__template--closed') {
            this.parentNode.className = 'faqs__template faqs__template--open'
        }
        if (itemClass === 'faqs__template faqs__template--open') {
            this.parentNode.className = 'faqs__template faqs__template--closed'
        }
    }
}

// For each header called the toggleFaqs fucntion
faqsHeader.forEach((el) => {
    el.addEventListener('click', toggleFaqs)
})

