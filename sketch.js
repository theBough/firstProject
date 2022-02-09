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
  
}
function createWalls(){
  w.push(new Wall(100,100,200,10,"yellow"));
  w.push(new Wall(100,200,200,10,"yellow"));
}
