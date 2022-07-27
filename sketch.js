class Ball {
  constructor(x, y, vx, vy, ax, ay) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.ax = ax;
    this.ay = ay;
  //do not forget to put in all the symbs in bw 1st two brackets
  }
  update() {
    // console.log(this);
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    this.vx = this.vx + this.ax;
    this.vy = this.vy + this.ay; //rychlost poloha = zrychlenie rychlost
  }
}
let ball = new Ball(200, 200, 0, 0, 0, 0); //again.. numbs

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('#311465')
  circle(ball.x, ball.y, 10); //the 10 is a diameter
  ball.update();
  ball.ax = 10/(mouseX - ball.x);
  ball.ay = 10/(mouseY - ball.y); //vectors are calculated like this
}
