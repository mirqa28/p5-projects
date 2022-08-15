// class Ball {
//   constructor(pos, v, a) {
//     this.pos = pos;
//     this.v = v;
//     this.a = a;
//     //do not forget to put in all the symbs in bw 1st two brackets
//     this.material = "steel";
//   }
//   update() {
//     // console.log(this);
//     this.pos.add(this.v);
//     this.v.add(this.a); //rychlost poloha = zrychlenie rychlost
//   }
// }

// const G = 0.01;
// let ball;

// function setup() {
//   createCanvas(800, 800);
//   ball = new Ball(createVector(200, 200), createVector(0, 0), createVector(0, 0)); //again.. numbs
//   // frameRate(2);
// }

// function draw() {
//   background('#311465')
//   stroke('white');
//   circle(ball.pos.x, ball.pos.y, 10); //the 10 is a diameter
//   const dst = dist(createVector(mouseX, mouseY), ball.pos) ^ 2;
//   const dir = createVector((mouseX - ball.pos.x) / dst, (mouseY - ball.pos.y) / dst);
//   ball.a = createVector(G * dir.x / dst, G * dir.y / dst); //vectors are calculated like this
//   strokeWeight(3);
//   line(ball.pos.x, ball.pos.y, ball.pos.x + ball.v.x * 5, ball.pos.y + ball.v.y * 5);
//   stroke('red');
//   line(ball.pos.x, ball.pos.y, ball.pos.x + ball.a.x * 50, ball.pos.y + ball.a.y * 50);
//   ball.update();
// }

// function dist(a, b) {
//   return sqrt(sq(a.x - b.x) + sq(a.y - b.y));
// }
