/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  mover: function(x,y,ancho,alto,sprite){
    Jugador.x = x;
    Jugador.y = y;
    Jugador.ancho = ancho;
    Jugador.alto = alto;
    Jugador.sprite = sprite;
  },
  perderVidas: function(cantVidas){
      this.vidas = Jugador.vidas - cantVidas;
  }
} 
