/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, movimiento) {
  
  Enemigo.call(this,sprite, x, y, ancho, alto, velocidad, rangoMov);
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
  console.log(movimiento);
  this.movimiento = movimiento;

}
//herencia

/* Completar creacion del ZombieConductor */
ZombieConductor.prototype = Object.create(Enemigo.prototype);   
ZombieConductor.prototype.contructor = ZombieConductor;

/* Completar metodos para el movimiento y el ataque */
ZombieConductor.prototype.mover = function(){
  if (this.movimiento == 'V'){
    this.x -= this.velocidad;
    this.y -= this.velocidad;

    if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)){
      this.velocidad *= -1;
    } 
    // Si sobrepasa el rangoY, lo manda al centro entre ambos rangos
    if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)) {
      this.x = this.rangoMov.desdeX + (this.rangoMov.hastaX - this.rangoMov.desdeX)/2;
    }

  }else{
    this.x += this.velocidad;
    this.y -= this.velocidad;

    if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
      this.velocidad *= -1;
    }
    // Si sobrepasa el rangoY, lo manda al centro entre ambos rangos
    if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
      this.y = this.rangoMov.desdeY + (this.rangoMov.hastaY - this.rangoMov.desdeY)/2;
    }
  }

  // if (Math.random() < 0.5) {
  //   this.x -= this.velocidad;
  //   this.y -= this.velocidad;
  // } else {
  //   //Sino, hace otro movimiento
  //   this.y += this.velocidad;
  //   this.x -= this.velocidad;
  // }

  // if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
  //   this.velocidad *= -1;
  // }
  // // Si sobrepasa el rangoY, lo manda al centro entre ambos rangos
  // if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
  //   this.y = this.rangoMov.desdeY + (this.rangoMov.hastaY - this.rangoMov.desdeY)/2;
  // }
}