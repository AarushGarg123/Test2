
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var treeImg;

function preload(){
	treeImg = loadImage("sprites/tree.png");
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,590,1300,14);
	tree = new Tree(900,570);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  tree.display();
  ground.display();
  
  drawSprites();
 
}



