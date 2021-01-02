class Chain{
    constructor(bodyA, pointB){
        options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.3,
            length: 20
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        
    }

    display(){
        
        if(this.chain.bodyA){
        var pos1 = this.chain.bodyA.position
        var pos2 = this.chain.pointB.position
        line(pos1.x, pos1.y, pos2.x, pos2.y);

    }
    
}
    fly(){
        this.chain.bodyA = null;
    }
}