var girl,boy,snowball
var girlImg,boyImg,bgImg,snowballImg;

function preload(){
  girlImg=loadImage("girl1.png");
  boyImg=loadImage("boy1.png");
  bgImg=loadImage("snow.jpg");
  snowballImg=loadImage("snowball.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
 girl= createSprite(displayWidth/2-200,displayHeight-50, 50, 50);
 girl.addImage("girlImg",girlImg);
 girl.scale=0.16;

 boy=createSprite(displayWidth-300,displayHeight-50,50,50);
 boy.addImage("boyImg",boyImg);
 boy.scale=0.17;

 snowball=createSprite(boy.x,boy.y,30);
 snowball.addImage("snowball",snowballImg);
 snowball.scale=0.12;

 
}

function draw() {
  background(bgImg);  
if(keyDown(RIGHT_ARROW)){
  boy.x=boy.x+10;
}
if(keyDown(LEFT_ARROW)){
  boy.x=boy.x-10;
}

snowball.depth=boy.depth-1;
snowball.x=boy.x;

if(snowball.isTouching(girl)){
  snowball.hide();
}
  
  drawSprites();
}
function keyPressed(){
  if(keyCode===32){
    snowball.velocityX=-3;
  }
  
}
