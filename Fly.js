class Fly {
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1.2
        }
        this.pointB = pointB;
        this.fly = Constraint.create(options);
        World.add(world,this.fly);
    }

    display(){
            push();
            stroke(48,22,8);
            strokeWeight(0);
            //line(pointB.x,pointB.y,pointA.x,pointA.y);
            pop();
        }
}
