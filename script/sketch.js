let angle = 0;
let randomColor;
let Shape = 'ellipse';

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  rectMode(CENTER);
  randomColor = color(random(360));
}

function draw() {
  background(0);

  for (let i = 50; i < mouseX; i += 50) {
    for (let j = 50; j < mouseY; j += 50) {
      fill(randomColor);
      noStroke();

      stroke(random(360), random(360), random(360), 90);
      strokeWeight(3);

      let rotationDirection = mouseIsPressed && random() > 0.5 ? 1 : -1;
      rotate(angle * rotationDirection);
      rotate(angle);

      let d = dist(mouseX, mouseY, i + width / 2, j + height / 2);
      let r = d / 5;

      push();
      translate(i, j);
      rotate(angle);

      if (Shape === 'ellipse') {
        ellipse(0, 0, r, r + 20);
      } else if (Shape === 'rect') {
        rect(0, 0, r, r);
      }

      pop();

      angle += 0.0003;
    }
  }
}

function mousePressed() {
  randomColor = color(100, random(360), random(360), 25);

  if (Shape === 'ellipse') {
    Shape = 'rect';
  } else {
    Shape = 'ellipse';
  }
}

//https://youtu.be/EMIoUxLEYJ4?si=Vu7F4HB6oO6eNt2Y 메인코드
