const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;

var myEngine, myWorld, myRender
var ground;
var box1, box2;
var pig;
var log1;
function setup() {
  createCanvas(1200,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  /* var myRender = Render.create({
		element: document.body,
		engine: myEngine,
		options: {
			width: 1600,
			height: 700,
			wireframes: false
		}
	})
  Render.run(myRender); */
  
  //making a ground object by Ground class(blueprint)
  ground = new Ground(600, height, 1200, 20);

  pig = new Pig(200, 200);

  //PI = 180
  log1 = new Log(100, 300, 100, PI/2);
 
  //calling the blueprint and giving values and saving it in box1
  box1 = new Box(200, 300, 50, 50);
  box2 = new Box(240, 100, 50, 100);
}

function draw() {
  Engine.update(myEngine);
  background("green"); 

  fill('black')
  text(mouseX+","+mouseY, mouseX, mouseY); 

  ground.display();
  pig.display();
  box1.display();
  box2.display();
  log1.display();   
}