let img;
let X = 0;
let Y = 0;
let tamaño = 5; 

function setup() {
  createCanvas(400, 400);
  img = loadImage('data:image/png;base64,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'); 
  img.resize(400, 400);
}

function draw() {
  background(255);
  image(img, X, Y); 
}

function keyPressed() {
  if (key === 'a' || key === 'A') { // Mover hacia la izquierda
    X -= tamaño;
  } else if (key === 'd' || key === 'D') { // Mover hacia la derecha
    X += tamaño;
  } else if (key === 'w' || key === 'W') { // Mover hacia arriba
    Y -= tamaño;
  } else if (key === 's' || key === 'S') { // Mover hacia abajo
    Y += tamaño;
  }
}
