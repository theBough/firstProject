let p;
let w;
function setup() {
  createCanvas(500, 400);
  p = new Player(200,200,50,50,"green");
  w = new Wall(100,100,200,10,"yellow");
}

function draw() {
  background(102,0,204);
  p.display();
  p.update();
  w.display()
}
