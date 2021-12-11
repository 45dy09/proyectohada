var starImg,bgImg;
var star, starBody;
var fairy,fairyImage

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	faiyImage=loadImage("fairyImage1.png")
}

function setup() {
	createCanvas(800, 750);

	
    fairy=createSprite();
	fairy.addImage(fairyImage);
	fairy.scale=0.3;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if(keyCode===LEFT_ARROW){
		fairy.velocityX=4
		fairy.velocity=0
	}
	if(keyCode===DOWN_ARROW){
		fairy.velocityX=-4
		fairy.velocity=0
	}
}

