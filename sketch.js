const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var backgroundImage;

function preload(){
  
  polygonimage = loadImage("polygon.png");

  GetBackgroundImage();

}

function setup() {
  createCanvas(900,400);
  
   engine = Engine.create();
   world = engine.world;

    ground = new Ground(600,390,1200,20);
    ground1 = new Ground(440,300,250,10);
    ground2 = new Ground(750,200,200,10);

    box1_1 = new Box(350,275,30,40);
    box1_2 = new Box(380,275,30,40);
    box1_3 = new Box(410,275,30,40);
    box1_4 = new Box(440,275,30,40);
    box1_5 = new Box(470,275,30,40);
    box1_6 = new Box(500,275,30,40);
    box1_7 = new Box(530,275,30,40);

    box1_8 = new Box(380,235,30,40);
    box1_9 = new Box(410,235,30,40);
    box1_10 = new Box(440,235,30,40);
    box1_11 = new Box(470,235,30,40);
    box1_12 = new Box(500,235,30,40);

    box1_13 = new Box(410,195,30,40);
    box1_14 = new Box(440,195,30,40);
    box1_15 = new Box(470,195,30,40);

    box1_16 = new Box(440,155,30,40);

    box2_1 = new Box(690,175,30,40);
    box2_2 = new Box(720,175,30,40);
    box2_3 = new Box(750,175,30,40);
    box2_4 = new Box(780,175,30,40);
    box2_5 = new Box(810,175,30,40);

    box2_6 = new Box(720,135,30,40);
    box2_7 = new Box(750,135,30,40);
    box2_8 = new Box(780,135,30,40);

    box2_9 = new Box(750,95,30,40);

  polygon = Bodies.circle(150,250,20);
  World.add(world,polygon);
  
  slingshot = new Slingshot(this.polygon,{x:150,y:250});

  score = 0;
}

function draw() {

  if(backgroundImage){
    background(backgroundImage);
  }

  push();
  fill("#70d1f4");
  textSize(20);
  stroke(3);
  text("Press space or 'R' to get another chance!!",500 ,350);
  text("Drag the hexagon and release the button to launch it on the towers!",30,50);
  text("Score - "+ score,30,300);
  pop();

  Engine.update(engine);

      ground.display();

      ground1.display();

      ground2.display();
      
      fill(" #70d1f4");
      //Diamond Blue

      box1_1.display();
      box1_1.Score();

      box1_2.display();
      box1_2.Score();

      box1_3.display();
      box1_3.Score();

      box1_4.display();
      box1_4.Score();

      box1_5.display();
      box1_5.Score();

      box1_6.display();
      box1_6.Score();

      box1_7.display();
      box1_7.Score();

      fill("#f4c2c2");
      //Baby Pink

      box1_8.display();
      box1_1.Score();

      box1_9.display();
      box1_9.Score();

      box1_10.display();
      box1_10.Score();

      box1_11.display();
      box1_11.Score();

      box1_12.display();
      box1_12.Score();

      fill("#00FFFF");
      //Cyan

      box1_13.display();
      box1_13.Score();

      box1_14.display();
      box1_14.Score();

      box1_15.display();
      box1_15.Score();


      fill(" #999999");
      //Greyish cyan
      
      box1_16.display();
      box1_16.Score();

      fill("#70d1f4");
      //Diamond Blue

      box2_1.display();
      box2_1.Score();

      box2_2.display();
      box2_2.Score();

      box2_3.display();
      box2_3.Score();

      box2_4.display();
      box2_4.Score();

      box2_5.display();
      box2_5.Score();

      fill("#00FFFF");
      //Cyan

      box2_6.display();
      box2_6.Score();

      box2_7.display();
      box2_7.Score();

      box2_8.display();
      box2_8.Score();

      fill("#f4c2c2")
      //Baby pink

      box2_9.display();
      box2_9.Score();

      fill("#00FFFF");
      //Cyan

      slingshot.display();
  
  imageMode(CENTER)
  image(polygonimage ,polygon.position.x,polygon.position.y,40,40);
}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32 || keyCode == 82){
      slingshot.attach(this.polygon);
  }
}

async function GetBackgroundImage(){

  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");

  var datetime = await response.json();

  var time = datetime.datetime;

  var hour = time.slice(11,13);

  console.log(hour);
  
  if(hour >= 17){
   bg = "bg2.jpg";
  }
  else{
    bg = "bg.jpg";
  }

  backgroundImage = loadImage(bg);

  console.log(bg);
}