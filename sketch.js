const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4;
var g1;
var l1, l2, l3, l4;
var pig, pig2;
var bird;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(225,300,50,50);
    box2 = new Box(200,300,50,50);
    box3 = new Box(150,125,50,50);
    box4 = new Box(270,125,50,50);
    
    g1 = new ground(200,390,400,10);

    l1 = new Log(210,150,200,PI/2);
    l2 = new Log(230,50,200,PI/2);
    l3 = new Log(260,5,150,PI/-5);
    l4 = new Log(183,5,150,PI/5);


    pig = new Pig(210,200);
    pig2 = new Pig(210,120);

    bird = new Bird(50,200);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    g1.display();
    l1.display();
    l2.display();
    l3.display();
    l4.display();
    pig.display();
    pig2.display();
   bird.display();
   
}