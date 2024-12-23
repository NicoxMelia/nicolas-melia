import { buildCard } from './js-card-maker.js';
import {front, back, tools, hardware} from './json-skills.js';

function buildCarts(){
    var divRow = document.createElement('div');
    divRow.classList.add('row');

    var titleRow = document.createElement('h2');

    titleRow.innerHTML = 'Front-End';
    
    for(var i in front){
        var divCol = document.createElement('div');
        divCol.classList.add('col');
        divCol.classList.add('d-flex');
        
        divCol.appendChild(buildCard(front[i]));
        divRow.appendChild(divCol);

        var divSkills = document.getElementById('about-skills');
        divSkills.appendChild(divRow);
    }

    for(var i in back){
        var divCol = document.createElement('div');
        divCol.classList.add('col');
        divCol.classList.add('d-flex');
        divCol.appendChild(buildCard(back[i]));
        divRow.appendChild(divCol);

        var divSkills = document.getElementById('about-skills');
        divSkills.appendChild(divRow);
    }

    for(i in tools){
        var divCol = document.createElement('div');
        divCol.classList.add('col');
        divCol.classList.add('d-flex');
        divCol.appendChild(buildCard(tools[i]));
        divRow.appendChild(divCol);

        var divSkills = document.getElementById('about-skills');
        divSkills.appendChild(divRow);
    }

    for(i in hardware){
        var divCol = document.createElement('div');
        divCol.classList.add('col');
        divCol.classList.add('d-flex');
        divCol.appendChild(buildCard(hardware[i]));
        divRow.appendChild(divCol);

        var divSkills = document.getElementById('about-skills');
        divSkills.appendChild(divRow);
    }


}

export {buildCarts};