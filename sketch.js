//name spacing
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

//declaring variables for agb game
var engine,world
var ground,ball

function setup() {
  createCanvas(800,400);

  //created game's engine from matter.engine class
  engine= Engine.create();
  //the world of game should be same as the world of engine
  world= engine.world;

  // to make the ground static
  var options={
    isStatic: true
  }
  // making ground from matter.bodies
  ground= Bodies.rectangle(400,350,800,10,options);
  // adding the ground and its world to matter.world
  World.add(world,ground);
  console.log(ground);

  //to make the ball bounce
  var options= {
    restitution: 1
  }
  //making the ball from matter.bodies
  ball = Bodies.circle(100,100,30,options); 
  //adding the ball and its world to matter.world 
  World.add(world,ball);



}

function draw() {
  background(0,0,0);

  //updating the engine
  Engine.update(engine);

  //to make the ground green
  fill("green");
  //to change the position of ground to the center
  rectMode(CENTER)
  //to display a rectangle
  rect(ground.position.x,ground.position.y,800,10);
  
  //to change the color of ball
  fill("blue");
  //doubles the size and makes it touch the ground
  ellipseMode(RADIUS)
  //to display a circle
  ellipse(ball.position.x,ball.position.y,30,30);



}