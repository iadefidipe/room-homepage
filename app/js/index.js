'use strict'

const btnRight = document.querySelector('.btn-right')
const btnLeft = document.querySelector('.btn-left')

const heroText = document.querySelectorAll('.hero-text')
const sectionOne = document.querySelector('.section-1')


let curSlide = 0
const maxSlide = heroText.length


btnRight.addEventListener('click', function(){
    curSlide++
    heroText.forEach(e => {
        e.classList.add("hidden")

        if(curSlide > maxSlide) return;
        
        if(curSlide == maxSlide) curSlide = 0;

        if (+e.dataset.slide == curSlide +1 && curSlide < maxSlide ){
            e.classList.remove("hidden")
        }
        
    })

    sectionOne.style.background = `url(../../images/desktop-image-hero-${curSlide+1}.jpg)`
    
})

btnLeft.addEventListener('click', function(){
    curSlide--
    heroText.forEach(e => {
        e.classList.add("hidden")

        if((curSlide*-1) > maxSlide) return;
        
        if((curSlide*-1) == maxSlide) curSlide = 0;

        if (+e.dataset.slide == (curSlide < 0 ? curSlide*-1 : curSlide) + 1 ){
            e.classList.remove("hidden")
        }
        
    })

    sectionOne.style.background = `url(../../images/desktop-image-hero-${(curSlide < 0 ? curSlide*-1 : curSlide) + 1}.jpg)`
    
})
