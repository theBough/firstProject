let p;
let w = [];
let rooms=[];
let row,column;
let e;

function setup() {
  createCanvas(500, 400);
  noStroke();
  row = 1;
  column = 0;
  p = new Player(200,150,10,10,"#ffff33");
  e= new Enemy(50,50,20,20);
  drawRooms();
}
function draw() {
  background("#33ccff");
  p.display();
  p.update();
  rooms[row][column].call();
  for(var i=0 ; i < w.length ; i++){
    w[i].display();  
  }
  e.display();
  checkForCollision();
  changeScreenTime();  
}
function changeScreenTime(){
  //this function will check if the player has gone off 
  //the canvas
  if(p.y<0){
    //check to see if player went off the top
    p.y = height-p.h
   row -= 1
    
  }//end if
  if(p.y > height){
    //check to see if player went past the bottom
    p.y =0
    row += 1;   
  }//end if
  if(p.x<0){
    //check to see if player went off to the left
    p.x = width-p.w
    column -=1
    
  }//end if
  if(p.x > width){
    //check to see if player went off the right
    p.x = 0
    column +=1;
    
  }//end if
}//end changeScreenTime


