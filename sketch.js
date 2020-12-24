const Engine= Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;

var myEngine, myWorld;
var ground1;
var box1,box2;
function setup() {
  createCanvas(400,400);
  myEngine= Engine.create();
  myWorld = myEngine.world;
  ground1= new Ground(200,380,400,10);
  box1 = new Box (200,100,50,50);
  box2 = new Box (220,80,50,50);
}

function draw() {
  background("black");  
  Engine.update(myEngine);
  ground1.display();
  box1.display();
  box2.display();
}