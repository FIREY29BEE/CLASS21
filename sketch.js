var fixedRect, movingRect;
var rect1, rect2, rect3, rect4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 700, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY=-3
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rect1 =createSprite(100,200,50,50);
  rect1.shapeColor="green";

  rect2 =createSprite(200,200,50,50);  
  rect2.shapeColor="green";

  rect3 =createSprite(300,200,50,50);
  rect3.shapeColor="green";

  rect4 =createSprite(600,200,50,50);
  rect4.shapeColor="green";
  rect4.velocityY=3;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, rect2)){
    movingRect.shapeColor = "red";
    rect2.shapeColor = "red";

  }
  else{
    movingRect.shapeColor = "green";
    rect2.shapeColor = "green";
  }
  
  bounceOff(fixedRect,rect4);
  drawSprites();
}


function isTouching(object1, object2){

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {

      return true;
}
else {

  return false;
 
}
}

function bounceOff(object1,object2){
if(object1.x - object2.x < object2.width/2 + object1.width/2
  && object2.x - object1.x < object2.width/2 + object1.width/2){
    object1.velocityX=object1.velocityX*(-1);
    object2.velocityX=object2.velocityX*(-1);
  }
if(  object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
    object1.velocityY=object1.velocityY*(-1);
    object2.velocityY=object2.velocityY*(-1);
  }
  
}