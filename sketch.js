var bullet,wall,thickness
var speed,weight
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  bullet.shapeColor="yellow"
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color("pink");
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);
  bullet.velocityX=speed;
}

function draw() {
  background(0);
  drawSprites(); 
}
