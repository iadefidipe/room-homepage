'use strict'

// DOM Elements
const btnRight = document.querySelector('.btn-right')
const btnLeft = document.querySelector('.btn-left')
const heroText = document.querySelectorAll('.hero-text')
const sectionOne = document.querySelector('.section-1')

// State variables
let curSlide = 0
const maxSlide = heroText.length


// goto next slide

const nextSlide = function(){
    curSlide++
    heroText.forEach(e => {
        e.classList.add("hidden")

        if(curSlide > maxSlide) return;
        
        if(curSlide == maxSlide) curSlide = 0;

        if (+e.dataset.slide == curSlide +1 && curSlide < maxSlide ){
            e.classList.remove("hidden")
        }
        
    })

    // shortcircuiting to determine which bg url was currently being used
    sectionOne.style.background = `url(../../images/desktop-image-hero-${curSlide+1}.jpg)` || `url(../../images/mobile-image-hero-${curSlide+1}.jpg)`
}

// goto previous slide
const prevSlide = function(){
    curSlide--
    heroText.forEach(e => {
        e.classList.add("hidden")

        if((curSlide*-1) > maxSlide) return;
        
        if((curSlide*-1) == maxSlide) curSlide = 0;

        if (+e.dataset.slide == (curSlide < 0 ? curSlide*-1 : curSlide) + 1 ){
            e.classList.remove("hidden")
        }
        
    })
    // shortcircuiting to determine which bg url was currently being used
    sectionOne.style.background = `url(../../images/desktop-image-hero-${(curSlide < 0 ? curSlide*-1 : curSlide) + 1}.jpg)` || `url(../../images/mobile-image-hero-${(curSlide < 0 ? curSlide*-1 : curSlide) + 1}.jpg)`
    
}

// event handlers
btnRight.addEventListener('click', nextSlide)
btnLeft.addEventListener('click', prevSlide)
