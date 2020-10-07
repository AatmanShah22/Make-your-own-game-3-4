class Hoop{
    constructor(x,y,width,height){
    this.body = createSprite(x,y,width,height)
    this.body.shapeColor = "White";
    this.body.velocityY = 2;
    this.image = loadImage("images/Baskethoop.png");
    this.body.addImage(this.image)
    this.body.scale = 0.1
    }

    display(){

       
        drawSprites();
    }
}

