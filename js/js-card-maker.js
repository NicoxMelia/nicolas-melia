function buildCard(imgData){
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
        img.setAttribute('src', imgData.iconPath);

        cardTopImg.appendChild(img);

        cardTop.appendChild(cardTopImg);
        card.appendChild(cardTop);

        var cardBottom = document.createElement('div');
        cardBottom.classList.add('card-bottom');

        var cardBottomMask = document.createElement('div');
        cardBottomMask.classList.add('card-bottom-mask');
        cardBottomMask.classList.add('d-flex');
        cardBottomMask.classList.add('align-items-center');
        
        var cardTitle = document.createElement('h5');
        cardTitle.innerHTML = imgData.name;

        cardBottomMask.appendChild(cardTitle);

        cardBottom.appendChild(cardBottomMask);
        card.appendChild(cardBottom);

        return card;
}

export {buildCard};