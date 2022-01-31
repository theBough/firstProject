let p;
function setup() {
  createCanvas(500, 400);
  p = new Player(200,200,50,50,"green")
}

function draw() {
  background(102,0,204);
  p.display();
}
