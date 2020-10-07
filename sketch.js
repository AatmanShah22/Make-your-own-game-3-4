var hoop,ball;
var background;
var score, ball1;
var time, edges;
var hoop1;
var s;
var side1, side2, side3, side4;
var ball_img1, hoop_img1;

//make the hoop function properly 
// need to work on the motion of ball
//time part 
//score
//background
//images
//next part of functionality in the game
// making bounceOff work


var sprite2
var   balls = []
function preload(){
  ball_img1 = loadImage("images/animated basketball.jpg")
 // hoop_img1 = loadImage("images/Baskethoop.png");
}

function setup(){

    createCanvas(400,400)
  ball1 = new Ball(100,100,10,10);
 
  hoop1 = new Hoop(350,200,10,10);
  s = second();
  sprite2 = createSprite(200,200,10,10);
  sprite2.velocityY = 3;
  side1 = createSprite (0,0,800,10);
  side2 = createSprite (400,400,800,10);
  side3 = createSprite (0,0,10,800);
  side4 = createSprite (400,400,10,800)
  ball1.body.addImage(ball_img1);
  //hoop1.body.addImage(hoop_img1);
  ball1.body.velocityX = 3;
  hoop1.body.velocityY = 2
  
 
}

function draw (){
  
    background("black");
    
    ball1.display();
    hoop1.display();

  side1.shapeColor = "black" 
  side2.shapeColor = "black"
  side3.shapeColor = "black"
  side4.shapeColor = "black"

    edges = createEdgeSprites();
    
  // hoop1.body.bounce(edges, rebound(hoop1));
 
  hoop1.body.bounceOff(edges)
  if(frameCount%60 == 0 ){
  spawnballs()
  }

  for(var i = 0; i <100; i++ ){
    balls[i].display()
  }
}


function spawnballs(){
  
    for( var i = 0 ; i < 100; i++){
    balls[i] = new Ball(100,100,10,10)
   // balls[i].display()
    }
  
 

}