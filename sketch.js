
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new Roof(width/2,height/4,width/7,20)
d=40
start = width/2
end = height/4+200
bob1=new Bob(start-d*2,end,d)
bob2=new Bob(start-d,end,d)
bob3=new Bob(start,end,d)
bob4=new Bob(start+d,end,d)
bob5=new Bob(start+d*2,end,d)
rope1=new Rope(bob1.body,roof.body,-d*2,0)
rope2=new Rope(bob2.body,roof.body,-d,0)
rope3=new Rope(bob3.body,roof.body,0,0)
rope4=new Rope(bob4.body,roof.body,+d,0)
rope5=new Rope(bob5.body,roof.body,+d*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-35,y:-35})
	}
}



