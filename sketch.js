let p;
let w = [];
let room = 1;
function setup() {
  createCanvas(500, 400);
  p = new Player(200,200,50,50,"green");
  drawRoomOne();
}
function draw() {
  background(102,0,204);
  p.display();
  p.update();
  for(var i=0 ; i < w.length ; i++){
    w[i].display();  
  }
  checkForCollission();
  changeScreenTime();  
}
function whereTo(direction){
  w = [];
  switch(room){
    case 1:
      //in room 1
      if(direction == "up"){
        //the player has gone up from room number 1
        room = 2;
        drawRoomTwo();
      }//end if
      break;
    case 2:
      
      break;
  }//end switch
}//end whereTo
function changeScreenTime(){
  //this function will check if the player has gone off 
  //the canvas
  if(p.y<0){
    //check to see if player went off the top
    p.y = height-p.h
    whereTo("up");
  }//end if
  if(p.y > height){
    //check to see if player went past the bottom
    p.y =0
    whereTo("down");
  }//end if
  if(p.x<0){
    //check to see if player went off to the left
    p.x = width-p.w
    whereTo("left");
  }//end if
  if(p.x > width){
    //check to see if player went off the right
    p.x = 0
    whereTo("right")
  }//end if
}//end changeScreenTime


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
