var bullet,speed,weight;
var thickness,wall;

function setup() {
  createCanvas(1600,400);
  
  thickness =random(22,83);
  speed =random(223,321);
  weight=random(30,52);
   
  bullet = createSprite(50, 200, 90, 20);
  bullet.shapeColor=rgb(255);
  bullet.debug=true;

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=rgb(80,80,80);
  wall.debug=true;

}

function draw() {
  background(225,255,255);  

 
  bullet.velocityX = speed;
  bullet.weight=weight;
  
  hasCollided(bullet,wall);

  if (hasCollided(bullet,wall)){
      var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness);
      bullet.velocityX =0;
      console.log(damage);
      
      if (damage>10){
        wall.shapeColor=rgb(255,0,0);

      }
      if (damage<10){
        wall.shapeColor=rgb(0,255,0);
      }
  }
    drawSprites();
}
  

