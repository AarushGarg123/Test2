class Mango{
    constructor(x,y,width,height){
        var options= {
            isStatic:true,
            restitution:0,
            friction:1,
        }
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(x,y,width,height,options);
        World.add(world, this.body);
    }
    display(){
        
    }
};