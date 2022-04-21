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
		restitution: 0.3,
		friction: 0,
		density:1.2
	}

	ball = Bodies.circle(200,0,20,ball_option);
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
	console.log(ball.position.x + " " + ball.position.y);
  Engine.update(engine);


  if(ball.position.x > 500 && ball.position.x < 650 && ball.position.y > 240){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0});
  }


  keyPressed();
  

  drawSprites();
 
}

function keyPressed(){
	if(	keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.6,y:-0.9 });
	}
};
