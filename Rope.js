class Rope{
    constructor(bodyA,pointB){
      
        var options={
        bodyA:bodyA,
       pointB:pointB,
       //pointB:{x:this.offsetX,y:this.offsetY}
       
        }
        this.pointB=pointB
        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);
        }
        display(){
            var pointA= this.Rope.bodyA.position;
            var pointB= this.pointB
            push()
            //stroke(0);
            strokeWeight (3)
            line (pointB.x,pointB.y,pointA.x,pointA.y);
            pop()
        }
        
}
