const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var supplyPackage,package;
var world,engine;
var helicopter,ground;

function preload(){
helicopterImage=loadImage("Helicopter for project.jpg");
packageImage=loadImage("package.png");
}

function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world;
  var properties={
    restitution:1.2,
    isStatic:true
  }
  supplyPackage=Bodies.rectangle(400,30,30,30,properties); 
  helicopter=createSprite(400,30,20,20);
  helicopter.addImage(helicopterImage);
  helicopter.scale=0.5;
  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,380,800,10,options);
  World.add(world,supplyPackage);
  World.add(world,ground);
}

function draw(){
  background(255,255,255);
  Engine.update(engine)
  if(keyDown("down_arrow")){
   Matter.Body.setStatic(supplyPackage,false)

  } 
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,10)
  imageMode(CENTER)
  image(packageImage,supplyPackage.position.x,supplyPackage.position.y,30,30)
  drawSprites();
}