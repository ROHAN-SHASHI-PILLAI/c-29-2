const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
 var stones=[];
var ground,leftBase,rightBase,bridge,jointPoint,stone,jointLink;


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80); 
  ground = new Base(200,680,600,20);
  leftBase=new Base(40,350,100,100);
  rightBase=new Base(1230,350,100,100);
  bridge= new Bridge(900,380,100,50);
  jointPoint= new Base(300,300,10,10);

  for(var i=0;i<=8;i++){
var x=random(width/2-200,width/2+300);
var y=random(-10,140);
var stone=new Stone(x,y,80,80);
stones.push(stone);
  }

  Matter.Composite.add(bridge.body,jointPoint);
  jointLink= new Link(bridge,jointPoint);
}

function draw() {
  background(51);
  Engine.update(engine);

ground.show();
leftBase.show();
rightBase.show();
bridge.show();
stone.show();
}
