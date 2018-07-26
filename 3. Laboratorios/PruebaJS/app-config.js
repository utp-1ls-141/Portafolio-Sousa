/*function buscarJugador(){
    alert("Has presionado el botón");
}*/

App = {
    init: function(){
        App.bindEvents();
    },
    elements: {
        buscarJugadorBtn: $(".buscar-jugador-btn-js"),
        jugadorTxt: $(".jugador-txt-js"),
    },
    bindEvents: function(){
       // App.elements.buscarJugadorBtn.on("click", buscarJugador);
       App.elements.buscarJugadorBtn.on("click", function(){
           alert("El jugador es: " + App.elements.jugadorTxt.val());
       });
    }
};