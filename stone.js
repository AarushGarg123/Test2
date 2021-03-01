class Stone{
    constructor(){
        var options= {
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.stone=Constraint.create(options);
        World.add(world, this.stone);
    }
    display() {
        
    }
};