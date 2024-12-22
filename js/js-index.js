import {front, back, tools} from './json-skills.js';

document.addEventListener('DOMContentLoaded', function() {

    function buildCarousel(){
        var carousel = document.createElement('div');
        carousel.classList.add('carousel');
        carousel.classList.add('slide');
        carousel.classList.add('carousel-fade');
        carousel.setAttribute('data-bs-ride', 'carousel');
        carousel.setAttribute('id', 'carouselSkills');
    
        var carouselItemsContainer = document.createElement('div');
        carouselItemsContainer.classList.add('carousel-inner');

        var flag = true;
    
        for(var i in front){
            var item = document.createElement('div');
            item.classList.add('carousel-item');

            if(flag){
                item.classList.add('active');
                flag = false;
            }
            
            var card = document.createElement('div');
            card.classList.add('language-card');
            
            var cardTop = document.createElement('div');
            cardTop.classList.add('card-top');
            
            var cardTopMask = document.createElement('div');
            cardTopMask.classList.add('card-top-mask');
    
            cardTop.appendChild(cardTopMask);
            card.appendChild(cardTop);
    
            var cardBottom = document.createElement('div');
            cardBottom.classList.add('card-bottom');
    
            var cardBottomMask = document.createElement('div');
            cardBottomMask.classList.add('card-bottom-mask');
    
            cardBottom.appendChild(cardBottomMask);
            card.appendChild(cardBottom);
            item.appendChild(card);
            carouselItemsContainer.appendChild(item);
            carousel.appendChild(carouselItemsContainer);

    
        }

        var carouselContainer = document.getElementById('about-skills');
        carouselContainer.innerHTML = '';
        carouselContainer.appendChild(carousel);
    
    }

    function verifyScreenSize(){
        var isSmallScreen = window.matchMedia("(max-width: 576px)").matches;

        if(isSmallScreen){
            // build a carousel
            buildCarousel();
        }else{
            // build carts
        }
    }

    window.addEventListener("resize", verifyScreenSize);
    verifyScreenSize();
});