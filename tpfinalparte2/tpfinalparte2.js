// Valentino Diaz Palma
// Luka Clausel
// https://www.youtube.com/watch?v=jYhr2Z6ffwE
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
  musica.play();
  Principal.dibujar();
}

function draw() {
  if (getAudioContext().state === "running") {
    Principal.dibujar();
  }
}


function keyPressed() {
  if (getAudioContext().state !== "running") {
    getAudioContext().resume(); 
    musica.loop(); 
  } else {
    Principal.manejarClic();
  }
}

function mousePressed() {
  Principal.manejarClic();
}
