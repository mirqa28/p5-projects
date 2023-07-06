let t;
let x, y, z;

function setup() {
  createCanvas(500, 500, WEBGL);
  noFill();

  t = new Array(10000);
  x = new Array(10000);
  y = new Array(10000);
  z = new Array(10000);

  for (let i = 0; i < t.length; i++) {
    t[i] = map(i, 0, t.length, 0, 10 * Math.PI);
    x[i] = Math.sin(t[i]) * (Math.exp(Math.cos(t[i])) - 2 * Math.cos(4 * t[i]) - Math.sin(t[i] / 12) ** 5);
    y[i] = Math.cos(t[i]) * (Math.exp(Math.cos(t[i])) - 2 * Math.cos(4 * t[i]) - Math.sin(t[i] / 12) ** 5);
    z[i] = Math.sin(t[i] / 2) * Math.cos(2 * t[i]);
  }
}

function draw() {
  background(220);
  rotateX(PI / 4);
  rotateY(frameCount * 0.01);

  beginShape();
  for (let i = 0; i < x.length; i++) {
    vertex(x[i] * 50, y[i] * 50, z[i] * 50);
  }
  endShape(CLOSE);
}
