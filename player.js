function Player(x,y,w,h,col){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.speed = 5;
  
  this.display = function() {
    fill(col);
    rect(this.x, this.y , this.w, this.h)
  }//end display 
  
  this.update = function(){
    if(keyIsDown(39)){
      //the arrow is clicked
      this.x += this.speed
    }
    //you need an if block for each direction
    
  }//end function
}//end Player
