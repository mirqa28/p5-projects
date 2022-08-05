// let s;
// let scl = 20;
// let food;

// function setup() {
//   createCanvas(600, 600);
//   s = new Snake();
//   frameRate(10); //ok
//   pickLocation();
// }

// function pickLocation() {
//   let cols = floor(width / scl);
//   var rows = floor(height / scl);
//   food = createVector(floor(random(cols)), floor(random(rows)));
//   food.mult(scl);
// }

// function mousePressed() {
//   s.total++;
// } //???

// function draw() {
//   background(51);
//   if (s.eat(food)) {
//     pickLocation();
//   }
//   s.death();
//   s.update();
//   s.show();
//   fill(255, 0, 100);
//   rect(food.x, food.y, scl, scl);
// } //ovo moz biti lose

// function keyPressed() {
//   if (keyCode === UP_ARROW) {
//     s.dir(0, -1);
//   }
//   else if (keyCode === DOWN_ARROW) {
//     s.dir(0, 1);
//   }
//   else if (keyCode === RIGHT_ARROW) {
//     s.dir(1, 0);
//   }
//   else if (keyCode === LEFT_ARROW) {
//     s.dir(-1, 0);
//   }
// } //this ok

// class Snake {
//   constructor() {
//     this.x = 0;
//     this.y = 0;
//     this.xspeed = 1;
//     this.yspeed = 0;
//     this.total = 0; //this ok
//     this.tail = []; //???
//   }
//   dir(x, y) {
//     this.xspeed = x;
//     this.yspeed = y;
//   }
//   eat(food) {
//     let d = dist(this.x, this.y, food.x, food.y); //food nie pos a x,y
//     if (d < 1) {
//       this.total++;
//       return true;
//     }
//     else {
//       return false;
//     }
//   };

//   death() {
//     for (let i = 0; i < this.tail.length; i++) {
//       let pos = this.tail[i];
//       let d = dist(this.y, pos.x, pos.y);
//       if (d < 1) {
//         console.log('starting over');
//         this.total = 0;
//         this.tail = [];
//       }
//     }
//   }; //ovo je lose

//   update() {
//     // for (let i in this.tail) {
//     for (let i = 0; i < this.tail.length - 1; i++) {
//       this.tail[i] = this.tail[i + 1];
//     }
//     if (this.total >= 1) {
//       this.tail[this.total - 1] = createVector(this.x, this.y); //moze biti lose
//     }
//     this.x = this.x + this.xspeed * scl;
//     this.y = this.y + this.yspeed * scl; //this ok?

//     this.x = constrain(this.x, 0, width - scl);
//     this.y = constrain(this.y, 0, height - scl); //moz biti lose
//   };

//   show() {
//     fill(255);
//     for (let i = 0; i < this.tail.length; i++) {
//       rect(this.tail[i].x, this.tail[i].y, scl, scl); //moz biti lose
//     }
//     rect(this.x, this.y, scl, scl);
//   };
// }