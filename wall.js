function Wall(x,y,w,h, col){
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  
  this.display = function(){
    //use push and the mathcing pop to apply
    //the fill property to just this wall.
    push()
    fill(col);
    rect(this.x, this.y, this.w, this.h);
    pop()
  }
}
