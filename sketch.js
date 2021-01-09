const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, Block1, Block2, Block3, Block4, Block5, Block6;
var Block7, Block8, Block9, Block10, Block11, Block12, Block13;
var Block14, Block15, Block16, Block17, Block18, Block19, Block20, Block21;
var polygon1;

function setup() {
createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world
  ground1 = new Ground(170, 200, 320, 20);

  
  Block1 = new Box(200, 182, 20, 20);
  Block2 = new Box(220, 182, 20, 20);
  Block3 = new Box(240, 182, 20, 20);

  Block4 = new Box(260, 182, 20, 20);

  Block5 = new Box(280, 182, 20, 20);

  Block6 = new Box(300, 182, 20, 20);

  Block7 = new Box(320, 182, 20, 20);

  
  Block8 = new Box(201, 2, 20, 20);

  Block9 = new Box(220, 2, 20, 20);

  Block10 = new Box(240, 2, 20, 20);

  Block11 = new Box(260, 2, 20, 20);

  Block12 = new Box(280, 2, 20, 20);

  Block13 = new Box(300, 2, 20, 20);

  Block14 = new Box(320, 2, 20, 20);

  //third level
  Block15  = new Box(202, 182, 20, 20);

  Block16  = new Box(220, 182, 20, 20);

  Block17 = new Box(240, 182, 20, 20);

  Block18 = new Box(260, 182, 20, 20);

  Block19 = new Box(280, 182, 20, 20);

  Block20 = new Box(300, 182, 20, 20);

  Block21 = new Box(320, 182, 20, 20);

  polygon_1 = new Polygon(110, 100, 20, 20);

  sling = new SlingShot(polygon_1.body, { x: 70, y: 90 });

  Engine.run(engine);

}

function draw() {
  background(56, 44, 44);
  ground1.display();

  BlockBlue1.display();

  BlockBlue2.display();

  BlockBlue3.display();

  BlockBlue4.display();

  BlockBlue5.display();

  BlockBlue6.display();

  BlockBlue7.display();

  BlockPink1.display ();

  BlockPink2.display ();

  BlockPink3.display ();

  BlockPink4.display ();

  BlockPink5.display ();

  BlockPink6.display ();

  BlockPink7.display ();

  BlockBlue8.display ();

  BlockBlue9.display ();

  BlockBlue10.display();

  BlockBlue11.display();

  BlockBlue12.display();

  BlockBlue13.display();

  BlockBlue14.display();

  polygon_1.display();

  sling.display();
}

function mouseDragged() {
  Matter.Body.setPosition(polygon_1.body, { x: mouseX, y: mouseY })
}

function mouseReleased() {
  sling.fly();
}

