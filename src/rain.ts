// var dorps = [];

// function setup() {
//     createCanvas(600, 600);
//     for (var i = 0; i < 500; i++) {
//         dorps[i] = new Drop(); // here.. Drop = class
//     }
// }

// function draw() {
//     background(230, 230, 250);
//     for (var i = 0; i < dorps.length; i++) {
//         dorps[i].fall();
//         dorps[i].show();
//     }
// }

// class Drop {

//     constructor() { // don't forget the constructor. Drop is a class
//         this.x = random(width);
//         this.y = random(-500, -50);
//         this.z = random(0, 20);
//         this.length = map(this.z, 0, 20, 10, 20);
//         this.yspeed = map(this.z, 0, 20, 1, 20);
//     }

//     fall() { // now no need for "function" bs cuz it's in class
//         this.y = this.y + this.yspeed;
//         var grav = map(this.z, 0, 20, 0, 0.2);
//         this.yspeed = this.yspeed + grav;

//         if (this.y > height) {
//             this.y = random(-200, -100);
//             this.yspeed = map(this.z, 0, 20, 4, 10);
//         }
//     }

//     show() { // now no need for "function" bs cuz it's in class
//         var thick = map(this.z, 0, 20, 1, 3);
//         strokeWeight(thick);
//         stroke(138, 43, 226);
//         line(this.x, this.y, this.x, this.y + this.length);
//     }
// }
