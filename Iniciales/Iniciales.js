function setup() {
  createCanvas(400, 400);
  background(255);
  stroke(0);
  strokeWeight(4);
}

function draw() {
 // Letra L
  line(50, 50, 50, 150); // Línea vertical
  line(50, 150, 100, 150); // Línea horizontal
  
  // Letra B
  line(150, 50, 150, 150); // Línea vertical
  // Parte superior de la B
  line(150, 50, 190, 50);
  arc(190, 75, 40, 50, -HALF_PI, HALF_PI);
  // Parte inferior de la B
  line(150, 100, 190, 100);
  arc(190, 125, 40, 50, -HALF_PI, HALF_PI);
}
