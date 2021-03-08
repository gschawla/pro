
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, dustbin2,dustbin3,ground,ball,dustbinImg,PaperImg;
function preload()
{
dustbinImg=addImage("dustbingreen.png")
paperImg=addImage("paper.png")	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
ground=new Ground(400,680,800,20)
side0= new Dustbin(550,620,20,100);
side1= new Dustbin(635,660,150,20)
side2= new Dustbin(720,620,20,100)

ball= new Ball(100,600,70)

ball.loadImage(paperImg)
}

function draw(){
background(0)
Engine.update(engine)

ball.display()
side0.display()
side1.display()
side2.display()
ground.display()

drawSprites();
}
function keyPressed(){

if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y:-15})
}


}