
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var angle = 60;
var angle1 = 60;
var angle2=60;
var poly;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    
  }
   
   var ground_options ={
     isStatic: true
   };
  
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

	//balls
  ball1 = Bodies.circle(210,-50,5,ball_options);
	World.add(world, ball1);
	ball2 = Bodies.circle(220,-60,5,ball_options);
	World.add(world, ball2);
	ball3 = Bodies.circle(200,-40,5,ball_options);
	World.add(world, ball3);
	ball4 = Bodies.circle(200,-70,5,ball_options);
	World.add(world, ball4);
	ball5 = Bodies.circle(200,-5,5,ball_options);
	World.add(world, ball5);
	ball6 = Bodies.circle(200,-3,5,ball_options);
  World.add(world,ball6);
	
  
  //rotators
  wedge1 = Bodies.rectangle(200,100, 90, 15, {
   isStatic : true
  })
	World.add(world, wedge1)
	wedge2 = Bodies.rectangle(200,100, 90, 15, {
		isStatic : true
	   })
	World.add(world, wedge2)
	wedge3 = Bodies.rectangle(200,100, 90, 15, {
		isStatic : true
	   })
	   World.add(world,wedge3)

	//walls
  wall = Bodies.rectangle(100, 200, 90, 15, {
    isStatic : true
  })
	World.add(world, wall)
	wall1 = Bodies.rectangle(300, 200, 90, 15, {
		isStatic : true
	  })
	World.add(world,wall1)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
	ellipse(ball1.position.x, ball1.position.y, 5);
	  
	ellipse(ball2.position.x, ball2.position.y, 5);
	  
	ellipse(ball3.position.x,ball3.position.y,5);
	
	  
	ellipse(ball4.position.x, ball4.position.y, 5);
	  
	ellipse(ball5.position.x, ball5.position.y, 5);
	  
	ellipse(ball6.position.x, ball6.position.y, 5);
	
  rect(ground.position.x, ground.position.y, 400, 20);
  push()
  Matter.Body.rotate(wedge3, angle);
  translate(wedge3.position.x, wedge3.position.y);
  rotate(angle);
  rect(0, 0, 90, 15);

	angle += 6;
	
	pop();
	push()
  Matter.Body.rotate(wedge1, angle);
  translate(wedge1.position.x, wedge1.position.y);
  rotate(angle1);
  rect(0, 0, 90, 15);

	angle1+= 10;
	
	pop();
	push()
  Matter.Body.rotate(wedge2, angle);
  translate(wedge2.position.x, wedge2.position.y);
  rotate(angle2);
  rect(0, 0, 90, 15);

	angle2 += 13;
	
  pop();
	rect(wall.position.x, wall.position.y, 90, 15);
	rect(wall1.position.x, wall1.position.y, 90, 15);
  
}



