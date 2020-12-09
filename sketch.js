var bullet;
var speed,weight;
var wall,thickness;
function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed=random(223,321)
  weight=random(30,52)

  bullet=createSprite(50,200,20,10);
  bullet.shapeColor="white"
  wall=createSprite(1200,200,thickness,200/2);
  wall.shapeColor="yellow"

  thickness=random(22,83)
}


function draw() {
  background(0); 
  bullet.velocityX=speed;
  
  if(bullet.x-wall.x<wall.width/2+bullet.width/2
    && wall.x-bullet.x<wall.width/2+bullet.width/2
    && bullet.y-wall.y<wall.height/2+bullet.height/2
    && wall.y-bullet.y<wall.height/2+bullet.height/2) 
    {
      wall.shapeColor="red";
      bullet.shapeColor="red";
      bullet.velocityX=0;
    }
    else{
      wall.shapeColor="yellow";
      bullet.shapeColor="white";
    }
  bullet.display();
  wall.display();
}