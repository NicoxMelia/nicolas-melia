import { buildCard } from './js-card-maker.js';
import {front, back, tools, hardware} from './json-skills.js';

var carousel = null;
var carouselItemsContainer = null;
var carouselContainer = null;

function buildCarousel(items){
    carousel = document.createElement('div');
    carousel.classList.add('carousel');
    carousel.classList.add('slide');
    carousel.classList.add('carousel-fade');
    carousel.setAttribute('data-bs-ride', 'carousel');
    carousel.setAttribute('id', 'carouselSkills');

    carouselItemsContainer = document.createElement('div');
    carouselItemsContainer.classList.add('carousel-inner');

   /* var flag = true;

    for(var i in front){
        var item = document.createElement('div');
        item.classList.add('carousel-item');

        if(flag){
            item.classList.add('active');
            flag = false;
        }
        
        item.appendChild(buildCard(front[i]));
        carouselItemsContainer.appendChild(item);
        carousel.appendChild(carouselItemsContainer);


    }*/

    addCarouselChild(items);

    carouselContainer = document.getElementById('about-skills');
    carouselContainer.classList.add('d-flex');
    carouselContainer.classList.add('flex-column');
    carouselContainer.classList.add('justify-content-center');
    /*carouselContainer.innerHTML = '';*/
    carouselContainer.appendChild(carousel);

}

function addCarouselChild(langList){

    var flag = true;

    for(var i in langList){
        var item = document.createElement('div');
        item.classList.add('carousel-item');

        if(flag){
            item.classList.add('active');
            flag = false;
        }
        
        item.appendChild(buildCard(langList[i]));
        carouselItemsContainer.appendChild(item);
        carousel.appendChild(carouselItemsContainer);


    }
}

export {buildCarousel};