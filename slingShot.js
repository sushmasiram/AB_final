class Slingshot{
    constructor(body,point){
        var chain_options = {
            bodyA: body,
            pointB:point,
            stiffness: 0.02,
            length:10
        }
        this.chain = Constraint.create(chain_options);
        
        World.add(world, this.chain)
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");


    }

    display(){
        image(this.sling2,170,30)
        image(this.sling1,200,30)
        if(this.chain.bodyA ){
            var posA = this.chain.bodyA.position
            var posB = this.chain.pointB
            push()
            strokeWeight(7)
            // line(x1,y1,x2,y2)// point1 to point 2  x1,y1 are positions of point1
            //line(posA.x,posA.y,posB.x,posB.y)
            strokeWeight(10)
            stroke(48,22,8)
            line(posA.x-20,posA.y,posB.x-10,posB.y+10)
            line(posA.x+20,posA.y,posB.x-10,posB.y+10)
            image(this.sling3,posA.x-20,posA.y-10,15,30)
            pop()
        }
    }

    fly(){
        this.chain.bodyA = null
    }

    attach(body){
        this.chain.bodyA = body
    }
}