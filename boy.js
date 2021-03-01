class Boy{
    constructor(bodyA,pointB){
        var options= {
            bodyA:bodyA,
            pointB:pointB,
            isStatic:true,
        }
        this.pointB=pointB;
        this.boy = Constraint.create(options);
        World.add(world, this.boy);
    }
    fly(){
        this.stone.bodyA = null;
    }
    display(){
        if(this.sling.bodyA){
            var pointA = this.stone.bodyA.position;
            var pointB = this.pointB;
        }
        
    }
};