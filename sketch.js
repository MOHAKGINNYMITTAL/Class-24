const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,500,50,50);
    box2 = new Box(700,500,50,50);
    box3 = new Box(900,400,50,50);
    box4 = new Box(700,400,50,50);
    ground = new Ground(500,height,1000,20)
    pig1 = new Pig(800,500);
    pig2 = new Pig(800,400);
    log1 = new Log(800,490,PI/2,300);
    log2 = new Log(800,390,PI/2,300);
    log3 = new Log(800,380,PI/7,180);
    log4 = new Log(950,380,-PI/7,180);
    bird = new Bird(10,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    bird.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    log3.display();
    log4.display();
}