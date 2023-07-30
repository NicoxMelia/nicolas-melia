$(document).ready(function(){
    fetch("https://app.sheetlabs.com/CODO/lenguajes")
    .then(response => response.json()).then(data => {
        for(lenguaje of data){
            imprimir(lenguaje.logo);
        }
    });
});

function imprimir(logo){
    $(".lenguajes").append("<div class='col-md-4 d-flex justify-content-center'><img src='"+logo+"' class='logo-len'>")
    $(".lenguajes").append("</div>");
}