class PantallaInicio {
  constructor (){
    this.imagen = fondo;
  }
  dibujar() {
    image(fondo, 0, 0, width, height);
    stroke(0);
    fill(0);
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Pantalla de Inicio", width / 2, height / 2);
    textSize(32);
    text("Haz clic para continuar", width / 2, height / 2 + 50);
  }
}
