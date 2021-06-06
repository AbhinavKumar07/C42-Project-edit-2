var hr , mn , sc;
var hrAngle , mnAngle , scAngle;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);
}

function draw() {
  background(255,255,255); 

  hrAngle = map(hr,0,24,0,360);
  mnAngle = map(mn,0,60,0,360);
  scAngle = map(sc,0,60,0,360);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(6);
  line(400,200,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(255,255,0);
  strokeWeight(8);
  line(400,200,80,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(0,0,0);
  strokeWeight(10);
  line(400,200,60,0);
  pop();

  translate(width/2,height/2);
  
  arc(hrAngle.x,hrAngle.y,100,100,0,TWO_PI);
  arc(mnAngle.x,mnAngle.y,100,100,0,TWO_PI);
  arc(scAngle.x,scAngle.y,100,100,0,TWO_PI);
  
  drawSprites();
}