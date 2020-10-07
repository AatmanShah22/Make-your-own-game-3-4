class Ball {
    constructor(x,y,width,height){
        this.body = createSprite(x,y,width,height)
        this.body.shapeColor = "Brown";
        this.body.velocityX=0
        this.body.scale = 0.1
        
       
    }
  
    display(){
      
        drawSprites();
    }

}