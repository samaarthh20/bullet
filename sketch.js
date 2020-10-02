var wall, thickness;
 var bullet,speed, weight;
  function setup() { 

    createCanvas(800,400); 
    thickness=random(22,53);
    speed=random(50, 100); 
    weight=random(30, ); 
    bullet = createSprite(50, 200, 50, 10); 
    bullet.shapeColor = "yellow"; 
    bullet.velocityX = speed; 

    wall = createSprite(600, 200, thickness, height/2); 
    wall.shapeColor = "red"; 
  } 
  
  function draw() { 

    background("black"); 

    if(hasCollided(bullet, wall)) {
       bullet.velocityX = 0;

       var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

       if(damage > 10) {
          wall.shapeColor = "blue";
       }
 
       if(damage < 10){
          wall.shapeColor = "orange";
       }
    }

    //hasCollided();

         drawSprites(); 
  }

function hasCollided(bullet2, wall2) {
  bulletRightEdge = bullet2.x + bullet2.width;
  wallLeftEdge = wall2.x;
if(bulletRightEdge>=wallLeftEdge) {
   return true
}
   return false;
}