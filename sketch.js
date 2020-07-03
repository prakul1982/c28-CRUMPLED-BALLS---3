const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;


 var ground ;
var paper;
var box1,box2,box3, boxImg,box4;
function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, 650, width, 10 );
	paper = new Paper(200,100,50);

	box2 = new Box(1000,650,120,20);
	box1 = new Box(1070,570,20,150);
	box3 = new Box(930,570,20,150);
  box4 = createSprite(1000,570,10,10);
  launcher = new Launcher(paper.body,{x:200,y:100});

  box4.addImage(boxImg);
box4.scale = 0.5;
}

function preload() {
    boxImg = loadImage("dustbingreen.png");
}

function draw() {
	Engine.update(engine);

  rectMode(CENTER);
  background("white");
  ground.display();
paper.display();

box2.display();
box1.display();
box3.display();
box1.display();

launcher.display();
  drawSprites();
 
}


function mouseReleased (){
	console.log("abc");
	launcher.fly()
	}
	function mouseDragged (){
		console.log("123");
		
		Matter.Body.setPosition(paper.body, {x:mouseX,y:mouseY});
		}
		
