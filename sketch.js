
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	g1 = new ground(400,200,60,15);

	b1 = new bob();
	b2 = new bob();
	b3 = new bob();
	b4 = new bob();
	b5 = new bob();


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  g1.display();
  drawSprites();
 
}



