var frect,mrect;

function setup() {
  createCanvas(800,400);
  frect=createSprite(400, 200, 50, 50);
  mrect=createSprite(300,300,50,50);
}

function draw() {
  background(255,255,255);
  
  mrect.x=mouseX;
  mrect.y=mouseY;

  if (mrect.x-frect.x<=mrect.width/2+frect.width/2
    && frect.x-mrect.x<=mrect.width/2+frect.width/2
    && mrect.y-frect.y<=mrect.height/2+frect.height/2
    && frect.y-mrect.y<=mrect.height/2+frect.height/2) {
      frect.shapeColor="red";
      mrect.shapeColor="red";
  }
  else {
    frect.shapeColor="green";
    mrect.shapeColor="green";
  }

  drawSprites();
}