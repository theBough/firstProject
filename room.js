
function drawRoom() {
 rooms = [
      [startRoom,blankRoom]
   ]
}//end function

var startRoom = function() {
  w = [];
  w.push(new Wall(100, 100, 200, 10, "#b3b300"));
  w.push(new Wall(100, 200, 200, 10, "#b3b300"));
}
var keyRoom = function() {
  w.push(new Wall(300, 300, 10, 100, "#b3b300"));
}
var blankRoom = function(){
  w = [];
  w.push(new Wall(75,75,200,200,"pink"))
}//end blankRoom
