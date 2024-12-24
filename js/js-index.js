/*import {front, back, tools} from './json-skills.js';*/
import {buildCarousel} from './js-carousel.js';
import {buildCarts} from './js-table-cards.js';
import {lang} from './json-skills.js';
import {makeList} from './js-list-proyects.js';

document.addEventListener('DOMContentLoaded', function() {

    function verifyScreenSize(){
        var isSmallScreen = window.matchMedia("(max-width: 576px)").matches;

        var aboutSkills = document.getElementById('about-skills');
        var titleAbout = document.createElement('h1');
        titleAbout.innerHTML = 'My skills';

        aboutSkills.innerHTML = '';
        aboutSkills.appendChild(titleAbout);

        if(isSmallScreen){
            // build a carousel
           for(var i in lang){
               var carouselTitle = document.createElement('h3');
               carouselTitle.innerHTML = lang[i].category;
               aboutSkills.appendChild(carouselTitle);
               buildCarousel(lang[i].items);
           }

        }else{
            // build carts
            buildCarts();
        }
    }

    window.addEventListener("resize", verifyScreenSize);
    verifyScreenSize();
    makeList();
});