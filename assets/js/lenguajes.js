$(document).ready(function(){
    var index = 1;
    fetch("https://app.sheetlabs.com/CODO/lenguajes")
    .then(response => response.json()).then(data => {
        for(lenguaje of data){
            imprimir(lenguaje.logo);
            putCarousel(lenguaje.logo, index);
            index++;
        }
    });
});

function imprimir(logo){
    $(".lenguajes").append("<div class='col-md-4 d-flex justify-content-center'><img src='"+logo+"' class='logo-len'>")
    $(".lenguajes").append("</div>");
}

function putCarousel(logo, indice){
     if(indice == 1){
        $(".carousel-inner").append("<div class='carousel-item item" + indice + " active'>");
     }else{
         $(".carousel-inner").append("<div class='carousel-item item" + indice + "'>");
     }
     $(".item" + indice).append("<div class='d-flex justify-content-center' id='item" + indice + "'>");
     $("#item" + indice).append("<img src='" + logo + "' class='d-block logo-len'>");
     $(".item" + indice).append("</div>");
     $(".carousel-inner").append("</div>");
    
}