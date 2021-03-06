const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var is = {isStatic : true};
  ground = Bodies.rectangle(200,380,400,10,is);
  World.add(world,ground);
  var rs = {
    restitution : 1
  }
  ball = Bodies.circle(100,100,20,rs);
World.add(world,ball);

}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode (CENTER); 
  rect(ground.position.x,ground.position.y,400,10);
  

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  drawSprites();
}