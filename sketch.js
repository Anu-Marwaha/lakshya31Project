const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var wall1,wall2,wall3,wall4,particle,plinko1,plinko2,plinko3;

function setup(){
    createCanvas(600,600);
    engine = Engine.create();
    world = engine.world;
    wall1 = new Wall(300,height,600,20);
    wall2 = new Wall(300,0,600,20);
    wall3 = new Wall(width,300,20,600);
    wall4 = new Wall(0,300,20,600);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(frameCount)
    wall4.display();
    wall3.display();
    wall2.display();
    wall1.display();
    Particles();
    particle.display();
}

function Particles(){
    if(frameCount%80===0){
        particle=new Particle(Math.random(25,275),25,10)
    }
}