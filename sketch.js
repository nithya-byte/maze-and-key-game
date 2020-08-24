var time =1000;
function setup() {
  createCanvas(windowWidth,windowHeight);
  gameState="play"
maze=createSprite(windowWidth/2+100,windowHeight/2,20,700);

maze2 =createSprite(windowWidth/2-500,windowHeight/2,20,700);
maze3 =createSprite(windowWidth/2-200,windowHeight/2+350,620,20);
maze4=createSprite(windowWidth/2-200,windowHeight/2-350,620,20);
wall1=createSprite(windowWidth/2,windowHeight/2+100,10,400);
wall2=createSprite(windowWidth/2-200,windowHeight/2+300,400,10);
wall3 = createSprite(windowWidth/2-400,windowHeight/2+100,10,400);
player = createSprite(windowWidth/2-200,windowHeight/2,10,20);
player.addImage(playerImg);
key1=createSprite(windowWidth/2-450,windowHeight/2-320,10,10);
dog1=createSprite(windowWidth/2+20,windowHeight/2,20,20);
dog1.shapeColor="black";
dog1.addImage(dog)
dog1.velocityX=3.1;
dog2=createSprite(windowWidth/2-450,windowHeight/2-60,20,20);
dog2.addImage(dog)
dog2.velocityX=3.2;
dog3=createSprite(windowWidth/2-450,windowHeight/2-200,20,20);
dog3.addImage(dog);
dog3.velocityX=3.5;
dog4=createSprite(windowWidth/2-200,windowHeight/2+200,20,20);
dog4.addImage(dog);
dog4.velocityX=3.65;
dog4.velocityY=2.1;
door=createSprite(windowWidth/2+40,windowHeight/2+300,20,20);
door.addImage(door1)
key1.addImage(keyimg);
key1.scale=0.5;
key2=createSprite(windowWidth/2-450,windowHeight/2+320,10,10);
key2.addImage(keyimg);
key2.scale=0.5
player.scale=0.75;
player.debug=true;

}
function preload(){
  playerImg=loadImage("player.png");
  rightplrimg=loadImage("Right_player.png");
  leftplrimg=loadImage("leftplayer.png");
  keyimg=loadImage("key.png");
  dog=loadImage("dog.gif");
  door1=loadImage("door.png")
}

function draw() {
  background("white");  
  drawSprites();

if(gameState==="play"){
  
  time =time-1;
text("TIME:"+time,displayWidth/2-200,displayHeight/2-200)

  if(time<=0){
    time =0;
    gameState="end"
  }
if(touches.length>0)
{
  if(touches[0].x>player.x)
  {
    player.x=player.x+1;
  }
  else if(touches[0].x<player.x)
  {
    player.x=player.x-1;
  }
  else if (touches[0].y>player.y)
  {
    player.y=player.y+1;
  }
  else if (touches[0].y<player.y)
  {
    player.y=player.y-1;
  }
}

  if(keyDown(LEFT_ARROW)){
    player.x=player.x-5;
    
  }
  
  

  if(keyDown(RIGHT_ARROW)){
    player.x=player.x+5
  }
  
  if(keyDown(UP_ARROW)){
    player.y=player.y-5
  }
  
  if(keyDown(DOWN_ARROW)){
    player.y=player.y+5
  }
  if(key1!=null){

  
  if(player.isTouching(key1)){
    key1.destroy();
  
    key1=null;
  }
  }
  if(key2!=null){

  
    if(player.isTouching(key2)){
      key2.destroy();
    
      key2=null;
    }
    }
  if(player.isTouching(door)){
    if(key1==null&&key2==null){
    
    
    gameState="WIN";
    }
  }
  
    player.collide(wall1);
    player.collide(wall2);
    player.collide(wall3);
    player.collide(maze);
    player.collide(maze2);
    player.collide(maze3);
    player.collide(maze4);
    
    dog1.bounceOff(maze);
   dog1.bounceOff(maze2);
   dog1.bounceOff(maze3);
    dog1.bounceOff(maze4);
    dog2.bounceOff(maze)
    dog2.bounceOff(maze2);
    dog1.bounceOff(maze3);
    dog1.bounceOff(maze4);
    dog3.bounceOff(maze);
   dog3.bounceOff(maze2);
   dog3.bounceOff(maze3);
    dog3.bounceOff(maze4);
    dog4.bounceOff(maze);
   dog4.bounceOff(maze2);
   dog4.bounceOff(maze3);
    dog4.bounceOff(maze4);
    if(player.isTouching(dog1)||player.isTouching(dog2)||player.isTouching(dog3)||player.isTouching(dog4)){
      gameState="end";
      
    }

    
}
else if(gameState==="end"){
  textSize(20)
  text("GAMEOVER!",windowWidth/2-200,windowHeight/2)
  player.velocityX=0;
  player.velocityY=0;
  dog1.velocityX=0;
  dog2.velocityX=0;
  dog3.velocityX=0;
  dog4.velocityX=0;
  dog4.velocityY=0;
  
}
else if(gameState=="WIN"){
  textSize(25)
  text("YOU WIN!",windowWidth/2-200,windowHeight/2); 
  player.velocityX=0;
  player.velocityY=0;
  dog1.velocityX=0;
  dog2.velocityX=0;
  dog3.velocityX=0;
  dog4.velocityX=0;
  dog4.velocityY=0;
}

}