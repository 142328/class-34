class Rope
{
	constructor(bodyA,pointB)
	{
        
		
		var options=
        {
			bodyA:bodyA,
            pointB:pointB,
			stiffness: 1.2,
            length: 250
		}
	

        this.pointB = pointB ;		
        //console.log(options);

		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	display()
	{
		var pointB=this.pointB;
		var pointA=this.rope.bodyA.position;

		strokeWeight(2);

	    line(pointB.x,pointB.y,pointA.x,pointA.y);	
	}
}

