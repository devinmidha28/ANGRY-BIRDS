class ground {
    constructor(x,y,width,height){

        var options = {
            isStatic: true
        } 
        this.ob=Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.ob);
        this.width=width;
        this.height=height;
    }
    display(){
        rectMode(CENTER);
        fill("brown");
    rect(this.ob.position.x, this.ob.position.y, this.width, this.height);
    }
}