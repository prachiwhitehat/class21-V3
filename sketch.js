const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var left,right,top_wall,bottom;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
 

  left=new Ground(5,200,10,400);
  right=new Ground(395,200,10,400);
  top_wall=new Ground(200,5,400,10);
  bottom= new Ground(200,395,400,10);

   rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  top_wall.show();
  bottom.show();
  left.show();
  right.show();
  
  Engine.update(engine);
}

