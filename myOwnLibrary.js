var bulletRightEdge, wallLeftEdge;
function hasCollided(bullet,wall){
 
  bulletRightEdge=bullet.x-bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}
