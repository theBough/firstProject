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
    //this is the right arrow
    if(keyIsDown(39)){
      //the arrow is clicked
      this.x += this.speed
    }
    //this is the up arrow
    if(keyIsDown(40)){
      //the arrow is clicked
      this.y += this.speed
    }
     //this is the left arrow
    if(keyIsDown(37)){
      //the arrow is clicked
      this.x -= this.speed
    }
     //this is the down arrow
    if(keyIsDown(38)){
      //the arrow is clicked
      this.y -= this.speed
    }
    //you need an if block for each direction
    
  }//end function
}//end Player
