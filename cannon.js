class Cannon{
    constructor(x,y,height,width,angle){
        this.x=x;
        this.y=y;
        this.height=height;
        this.width=width;
        this.angle=angle;
        this.cannonImage=loadImage("assets/canon.png");
        this.baseImage=loadImage("assets/cannonBase.png");
    }
    display(){
        //parte superior del cañon
            push();
            imageMode(CENTER);
            image(this.cannonImage,this.x,
                this.y,
                this.height,
                this.width);
            pop();
            //parte inferior
            image(this.baseImage,70,20,200,200);
            noFill();
            
        }
}
