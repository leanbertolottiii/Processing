let t = 0;
function setup() {
  createCanvas(500, 500);
  background(200, 200, 200);
  noStroke();
}

function draw() {
  t += 1;
  if (t == 250) {
    fill(0, 255, 0); // Verde
    rect(150, 180, 200, 100);
  }


  if (t == 375) {
    fill(0, 0, 255); // Azul
    rect(150, 180, 200, 100);
  }

  if (t == 125) {
    fill(255, 0, 0); // Rojo
    rect(150, 180, 200, 100);
    t = 0; // Reinicia el contador
  }
}
