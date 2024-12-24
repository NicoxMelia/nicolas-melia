import {proyects} from './json-proyects.js';

function makeList(){
    var container = document.getElementById('list-cont');

    for(var i in proyects){
        var item = buildItems(proyects[i]);
        
        if(proyects[i].items == undefined){
            container.appendChild(item);
        }else{
            item.addEventListener('mouseover', function(){

                var newItem = document.createElement('div');
                newItem.classList.add('new-item');
                container.appendChild(newItem);

                var itemsRm = document.querySelectorAll('.proyect-item');
                var proyectTitle = document.getElementById('proyect-title');
                itemsRm.forEach(function(item){
                    item.setAttribute('style', 'display: none !important;');
                    proyectTitle.setAttribute('style', 'display: none !important;');
                });

                newItem.addEventListener('mouseleave', function(){
                    newItem.remove();
                    itemsRm.forEach(function(item){
                        item.attributes.removeNamedItem('style');
                    });
                    proyectTitle.attributes.removeNamedItem('style');
                });

                for(var j in proyects[i].items){
                    var subItem = buildItems(proyects[i].items[j]);
                    newItem.appendChild(subItem);
                }
            });
            container.appendChild(item);
        }

    }

}

function buildItems(itemJson){
    var item = document.createElement('a');
    item.classList.add('proyect-item');
    item.classList.add('d-flex');
    item.classList.add('align-items-center');
    item.setAttribute('href', itemJson.url);

    var itemIcon = document.createElement('div');
    itemIcon.classList.add('item-icon');
    var icon = document.createElement('img');
    icon.setAttribute('src', itemJson.imgPath);
    itemIcon.appendChild(icon);

    item.appendChild(itemIcon);

    var itemTitle = document.createElement('h4');
    itemTitle.classList.add('item-text');
    itemTitle.innerHTML = itemJson.name;

    item.appendChild(itemTitle);

    return item;
}

export {makeList};