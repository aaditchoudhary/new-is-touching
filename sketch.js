var fr;
var mr;

function setup() {
  createCanvas(800,400);
  mr=createSprite(400, 200, 50, 50);
  fr=createSprite(400, 200, 50, 50);
  
  mr.shapeColor="GREEN"
  fr.shapeColor="yellow"

}

function draw() {
  background(255,255,255);  
  mr.x=mouseX;
  mr.y=mouseY;
  
  if((mr.x - fr.x < mr.width/2 + fr.width/2) &&
   (fr.x - mr.x < mr.width/2 + fr.width/2) && 
   (fr.y - mr.y < mr.height/2 + fr.height/2) && 
   (mr.y - fr.y < mr.height/2 + fr.height/2))
    { fr.shapeColor = "red"; mr.shapeColor = "red"; }
    
    else {
     fr.shapeColor = "green"; mr.shapeColor = "green";
     }

  drawSprites();
}