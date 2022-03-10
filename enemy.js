function Enemy(x,y,w,h){
  this.x =x;
  this.y = y
  this.w = w;
  this.h = h;
  //make sure the picture is in 
  //the directory on the left
  this.img = loadImage("rightFlat.png")
  
  this.display = function(){
    image(this.img,this.x, this.y);
  }//end display
  
  
}//end Enemy
