const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine,world;

let ball;
let ball_option;

var groundObj,leftSide,rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(700, 400);


	engine = Engine.create();
	world = engine.world;
	

	//crear los cuerpos aquí.
	ball_option = {
		isStatic: false,
		restitution: 0.5,
		friction: 0,
		density:1.2
	}

	ball = Bodies.circle(200,10,20,ball_option);
	World.add(world,ball);
	groundObj = new Ground(0,300,1400,20);
	leftSide = new Ground(500,240,20,100);
	rightSide = new Ground(650,240,20,100);
	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x, ball.position.y,20);
  groundObj.display();
  leftSide.display();
  rightSide.display();
  Engine.update(engine);





  keyPressed();

  if(ball.position.x > 700 && ball.position.x < 0 && ball.position.y > 400){
	ball.position.x = 200;
   	ball.position.y = 10;
  }


  drawSprites();
 
}

function keyPressed(){
	if(	keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:5, y:-4});
	}

};
