
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
groundobj=new ground(800,670,1600,20);
paperobj=new paper(200,450,40)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 groundobj.display()
paperobj.display()
}


function  keyPressed(){
	if  (keyCode===UP_ARROW){
		Matter.Body.applyForce(paperobj.body,paperobj.body.postition,{x:85,y:-85})
	}
}
	
