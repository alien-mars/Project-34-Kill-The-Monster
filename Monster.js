class Monster {
    constructor(x, y, r) {
        var options = {
            frictionAir: 0.07,
            density:0.5,
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("Monster-01.png");
        this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        noStroke();
        imageMode(CENTER);
        image(this.image,0,0,220,200);
        pop();
    }

};