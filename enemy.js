function Enemy(x,y,w,h){
  this.x =x;
  this.y = y
  this.w = w;
  this.h = h;
  this.xSpeed = 1;
  this.ySpeed = 1;
  //make sure the picture is in 
  //the directory on the left
  this.img = loadImage("rightFlat.png")
  
  this.display = function(){
    this.img.resize(this.w, this.h)
    image(this.img,this.x, this.y);
  }//end display
  this.update = function(){
    //update the location of the Enemey.
    //change the y location and x location
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if(this.x > p.x){
      this.xSpeed = -1;
    }else{
      this.xSpeed = 1;
    }
    if(this.y > p.y){
      this.ySpeed = -1;
    }else{
      this.ySpeed = 1;
    }
  }//end update
  
  
}//end Enemy
