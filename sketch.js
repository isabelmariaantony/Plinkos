const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var particles = []
var plinkos = []
var divisions = []

function setup() {
  var canvas = createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);
for(var k = 0; k<=width; k=k+80){
divisions.push(new Divisions(k,height-150,10,300))

}
for(var k = 75; k<=width; k=k+50){
  plinkos.push(new Plinko(k,75))
  
  }
for(var k = 50; k<=width; k=k+50){
    plinkos.push(new Plinko(k,175))
    
    }
for(var k = 75; k<=width; k=k+50){
      plinkos.push(new Plinko(k,275))
      
      }
for(var k = 50; k<=width; k=k+50){
        plinkos.push(new Plinko(k,375))
        
        }
  


}

function draw() {
  background(0,0,0);  
  Engine.update(engine);

  ground.display();
  for(var k=0; k<divisions.length; k++){
    divisions[k].display();
  }
  
  for(var k=0; k<plinkos.length; k++){
    plinkos[k].display();
  }
  
  if(frameCount%60===0){
    particles.push(new Particle(random(0,width),10,10))
  }
  for(var k=0; k<particles.length; k++){
   particles[k].display();
  }
  
  drawSprites();
}