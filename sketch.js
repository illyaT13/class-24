const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//creating AI engine, world and bodies

var engine, world;
var ground;
var ball;
var button
var rotater1
var angle = 25

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
var rotater1_options = {
  isStatic: true,
};
  rotater1 = Bodies.rectangle(200,300,20,100,rotater1_options)

  World.add(world, rotater1)


  button = createImg("up arrow.png")
  button.size(50,50)
  button.position(10,10)
  button.mouseClicked(vForce)

  var ball_options = {
    restitution: 1.0,
    frictionAir: 0.01,
  };

  ball = Bodies.circle(250, 250, 20, ball_options);
  World.add(world, ball);
  //console.log(world)
  var ground_options = {
    isStatic: true,
  };

  ground = Bodies.rectangle(200, 380, 400, 20, ground_options);
  World.add(world, ground);
  //console.log(ground.friction)
}

function draw() {
  background("black");

  //rect(30, 20, 55, 55);

  Engine.update(engine);
  Matter.Body.rotate(rotater1, angle)
  push();
  fill("blue");
  translate(rotater1.position.x,rotater1.position.y);
  rotate(angle)
  rectMode(CENTER)
  rect(0,0,20,100)
  angle+=0.1
  pop();

  push();
  translate(ground.position.x, ground.position.y);
  rectMode(CENTER);
  fill("blue");
  rect(0, 0, 400, 20);
  pop();

  push();
  fill("yellow");
  translate(ball.position.x, ball.position.y);
  ellipseMode(RADIUS);
  ellipse(0, 0, 20, 20);
  pop();

  



}

function vForce() {

  Matter.Body.applyForce(ball, ball.position, {x:0,y:-0.05})
}
