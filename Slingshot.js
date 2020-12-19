class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);
            stroke(66, 45, 24);
            if(pointA.x<200){
                image(this.sling3,pointA.x-25,pointA.y,10);
                line(pointA.x-25, pointA.y+10, pointB.x+20, pointB.y-50);
                line(pointA.x-25,pointA.y+10,pointB.x-20,pointB.y-50);
            }
            else{
                image(this.sling3,pointA.x+25,pointA.y,10);   
                line(pointA.x+25, pointA.y+10, pointB.x+20, pointB.y-50);
                line(pointA.x+25,pointA.y+10,pointB.x-20,pointB.y-50);
            }
            pop();
        }

       image(this.sling1,200,20);    
       image(this.sling2,170,20);    
    }
    
}