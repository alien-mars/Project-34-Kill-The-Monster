class Hero {
    constructor(x, y, r) {
        var options = {
            frictionAir: 1,
            density:1,
            isStatic:false
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("Superhero-01.png");
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
        fill("white");
        imageMode(CENTER);
        image(this.image,0,0,300,130);
        pop();
    }

};