const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var treeObj, stoneOb,groundObject, string;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var gamestate;
var score;
var b

function preload(){
	boy=loadImage("images/boy.png");
  b=loadImage("bg.png")
  }

function setup() {
createCanvas(1370, 610);
engine = Engine.create();
world = engine.world;

stoneOb=new Stone(235,420,30); 

mango1=new Mango(1170,130,40);
mango2=new Mango(1100,100,30);
mango3=new Mango(1140,150,37);
mango4=new Mango(1000,70,25);
mango5=new Mango(1100,70,30);
mango6=new Mango(1000,230,32);
mango7=new Mango(900,230,25);
mango8=new Mango(900,160,40);
mango9=new Mango(1010,140,43);
mango10=new Mango(1200,200,24);
mango11=new Mango(1100,250,44);
mango12=new Mango(1120,50,35);




treeObj=new Tree(1050,600);
groundObject=new Ground(width/2,600,width,20);
string=new Lauch(stoneOb.body,{x:240,y:460})  

gamestate = 1;
score = 0;

Engine.run(engine);
 
}

function draw() {

  background(b);

  if(gamestate === 1){
  textSize(30);
  textSize(30);
  fill("brown")
  text("Press Space To Get A New Stone To Throw!",50 ,200);

  image(boy,200,380,200,300);
  
  treeObj.display();
  stoneOb.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  
  stoneOb.display();

  groundObject.display();
string.display();
  detectollision(stoneOb,mango1);
  detectollision(stoneOb,mango2);
  detectollision(stoneOb,mango3);
  detectollision(stoneOb,mango4);
  detectollision(stoneOb,mango5);
  detectollision(stoneOb,mango6);
  detectollision(stoneOb,mango7);
  detectollision(stoneOb,mango8);
  detectollision(stoneOb,mango9);
  detectollision(stoneOb,mango10);
  detectollision(stoneOb,mango11);
  detectollision(stoneOb,mango12);


  }

}

function mouseDragged(){
	Matter.Body.setPosition(stoneOb.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased(){
	string.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneOb.body, {x:235, y:420}) 
	  string.attach(stoneOb.body);
	}
}

  function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if (distance<=lmango.r+lstone.r){
   Matter.Body.setStatic(lmango.body , false);
   stoneOb.visible = false;
 } 
}
