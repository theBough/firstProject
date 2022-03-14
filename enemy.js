function Enemy(x,y,w,h){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.img = loadImage("rightFlat.png");
  this.xSpeed  =1;
  this.ySpeed = 1;
  
  this.display = function(){
    this.img.resize(this.w, this.h)
    image(this.img, this.x, this.y);
  }//end display
  
  this.update = function(){
    /*This function will move the enemy
    and move the Enemy base on where the player is.
    */
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if(this.x > p.x){
      //the Enemy is on the right side of 
      //the player
      this.xSpeed = -1;
    }else{
      /*The enemy is on the Left side of 
      the player*/
      this.xSpeed = 1
    }
    if(this.y > p.y){
      //the Enemy is below 
      //the player
      this.ySpeed = -1;
    }else{
      /*The enemy is above  
      the player*/
      this.ySpeed = 1
    }
  }//end update
}//end Enemy
