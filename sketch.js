const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var ground;
var hero;
var fly;
var monster;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12,block13;
var block14,block15,block16,block17,block18,block19,block20,block21;
var block22,block23,block24,block25,block26;

function preload() {
  //preload the images here
  backgroundImg = loadImage("GamingBackground.png");
}

function setup() {
  createCanvas(1200, 600);

  engine = Engine.create();
  world = engine.world;

  // create sprites here

  ground = new Ground(450,500,900,20);

  hero = new Hero(270,400,200);

  fly = new Fly(hero.body,{x:270,y:60});

  monster = new Monster(830,300,150);

  //first column of blocks
  block1 = new Block(450,450,50,50);
  block2 = new Block(450,400,50,50);
  block3 = new Block(450,350,50,50);
  block4 = new Block(450,300,50,50);
  block5 = new Block(450,250,50,50);
  block6 = new Block(450,200,50,50);
  block7 = new Block(450,150,50,50);

  //second column of blocks
  block8 = new Block(520,450,50,50);
  block9 = new Block(520,400,50,50);
  block10 = new Block(520,350,50,50);
  block11 = new Block(520,300,50,50);
  block12 = new Block(520,250,50,50);
  block13 = new Block(520,200,50,50);

  //third column of blocks
  block14 = new Block(590,450,50,50);
  block15 = new Block(590,400,50,50);
  block16 = new Block(590,350,50,50);
  block17 = new Block(590,300,50,50);
  block18 = new Block(590,250,50,50);
  block19 = new Block(590,200,50,50);
  block20 = new Block(590,150,50,50);
  block21 = new Block(590,100,50,50);

  //fourth column of blocks
  block22 = new Block(660,450,50,50);
  block23 = new Block(660,400,50,50);
  block24 = new Block(660,350,50,50);
  block25 = new Block(660,300,50,50);
  block26 = new Block(660,250,50,50);
 
}

function draw() {
  background(backgroundImg);

  Engine.update(engine);

  ground.display();
  hero.display();
  fly.display();
  monster.display();

  fill("red");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("green");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();

  fill("yellow");
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  fill("blue");
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();

  detectCollision(block24,monster);

  //drawSprites();

}

function detectCollision(block,monster){
	 blockBodyPosition = block.body.position;
	 monsterBodyPosition = monster.body.position;

	var distance = dist(blockBodyPosition.x,blockBodyPosition.y,monsterBodyPosition.x,monsterBodyPosition.y);
	if(distance<=block.width/2 + monster.r){
    Matter.Body.setStatic(monster.body, false);
  }
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}
