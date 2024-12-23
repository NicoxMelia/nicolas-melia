/*import {front, back, tools} from './json-skills.js';*/
import {buildCarousel} from './js-carousel.js';
import {buildCarts} from './js-table-cards.js';

document.addEventListener('DOMContentLoaded', function() {

    /*function buildCarousel(){
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
            
            var cardTopImg = document.createElement('div');
            cardTopImg.classList.add('card-top-img');
            cardTopImg.classList.add('d-flex');
            cardTopImg.classList.add('justify-content-center');
            cardTopImg.classList.add('align-items-center');
            
            
            var img = document.createElement('img');
            img.setAttribute('id', 'icon-lang');
            img.setAttribute('src', front[i].iconPath);

            cardTopImg.appendChild(img);
    
            cardTop.appendChild(cardTopImg);
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
    
    }*/

    function verifyScreenSize(){
        var isSmallScreen = window.matchMedia("(max-width: 576px)").matches;

        var aboutSkills = document.getElementById('about-skills');
        var titleAbout = document.createElement('h1');
        titleAbout.innerHTML = 'My skills';

        aboutSkills.innerHTML = '';
        aboutSkills.appendChild(titleAbout);

        if(isSmallScreen){
            // build a carousel
            buildCarousel();
        }else{
            // build carts
            buildCarts();
        }
    }

    window.addEventListener("resize", verifyScreenSize);
    verifyScreenSize();
});