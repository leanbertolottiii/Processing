let angle = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(255);
  translate(width / 3, height / 3); 
  rotate(angle);
  strokeWeight(2);
  stroke(0);
  line(0, 0, 100, 0);
  
  angle += 1;
  if (angle >= 360) {
    angle = 0;
  }
}
