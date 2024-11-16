// Valentino Diaz Palma
// Luka Clausel
let musica;
let fondo;
let shuriken;
let ganaste;
let perdiste;
let pantallaActiva = 1; 

function preload() {
  fondo = loadImage("assets/fondo.jpg");
  shuriken = loadImage("assets/shuriken.png");
  ganaste = loadImage("assets/ganaste.jpg")
  perdiste = loadImage("assets/perdiste.jpg")
  musica = loadSound("assets/musica.mp3"); 
  
}

function setup() {
  createCanvas(640, 440);
  Principal = new Principal();
}

function draw() {
  Principal.dibujar();

}



// Esta función debe estar fuera de draw()
function mousePressed() {
  Principal.manejarClic();
}
