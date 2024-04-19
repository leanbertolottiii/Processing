let angu = 0;
let longi = 150;
let velo= 1;
let colores;

function setup() {
  createCanvas(400, 400);
  colores = [color(255, 0, 0), color(0, 255, 0), color(0, 0, 255)]; // Rojo, verde y azul
}

function draw() {
  let x2 = width / 2 + longi * cos(radians(angu));
  let y2 = height / 2 + longi * sin(radians(angu));
  let CA = lerpColor(colores[0], colores[1], angu / 360);
  stroke(CA);
  line(width / 2, height / 2, x2, y2);
  angu += velo;
  if (angu >= 360) {
    angu = 0;
    colores.push(colores.shift());
  }
}
