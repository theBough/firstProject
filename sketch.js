let p;
let w = [];
function setup() {
  createCanvas(500, 400);
  p = new Player(200,200,50,50,"green");
  createWalls();
}

function draw() {
  background(102,0,204);
  p.display();
  p.update();
  for(var i=0 ; i < w.length ; i++){
    w[i].display();  
  }
  checkForCollission();
  
}
function createWalls(){
  w.push(new Wall(100,100,200,10,"yellow"));
  w.push(new Wall(100,200,200,10,"yellow"));
}

function checkForCollission() {
  for (var i = 0; i < w.length; i++) {

    //check if we hit the left of any wall
    if (p.y <= w[i].y + w[i].h && p.y + p.h >= w[i].y && p.x <= w[i].x + w[i].w && p.x >= w[i].x) {
      p.x += 5
    }

    //check if we hit the right of any wall
    if (p.y <= w[i].y + w[i].h && p.y + p.h >= w[i].y && p.x + p.w >= w[i].x && p.x <= w[i].x + w[i].w) {
      p.x -= 5
    }

    //check if we hit the bottom of any wall
    if (p.x <= w[i].x + w[i].w && p.x + p.w >= w[i].x && p.y <= w[i].y + w[i].h && p.y >= w[i].y) {
      p.y += 5;
    }

    //check if we hit the top of any wall
    if (p.x <= w[i].x + w[i].w && p.x + p.w >= w[i].x && p.y + p.h >= w[i].y && p.y <= w[i].y + w[i].h) {
      p.y -= 5;
    }

  }
}
