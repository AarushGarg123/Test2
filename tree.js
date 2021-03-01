class Tree{
    constructor(x,y){
        var options= {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.tree = loadImage("sprites/tree.png");
        World.add(world, this.body);
    }
    display() {
        
    }
};