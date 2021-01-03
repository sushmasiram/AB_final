const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var gamestate = "START"

var blink = 255

var lives = 5
var dragged = false
var score = 0
function preload() {
    backgroundImg1 = loadImage("sprites/bg.png");
    getBgImage()
    starImg = loadImage("sprites/star1.png")

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
	//creating ground

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,40);
    
    chain1 = new Slingshot(bird.body, {x:200,y:40});
   
 
}

function draw(){
    if(backgroundImg){
    background(backgroundImg);
    }else{
        background(backgroundImg1)
    }
    Engine.update(engine);
    push();
    strokeWeight(5)
    textSize(30)
    textStyle(BOLD)
    text( "Score: "+ score, 1000, 30)
    text ("Lives: " + lives, 800, 30)
    pop();
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    chain1.display();
    pig1.score();
    pig3.score();
    if(mouseIsPressed && gamestate === "START"){
        if( dragged === true)
        Matter.Body.setPosition( bird.body,{x: mouseX, y: mouseY});
        
    }

    if((bird.body.position.y > 250 || bird.body.speed < 0.5 )&& gamestate === "FLY"){
        push()
        fill(255,blink)
        textSize(20)
        textStyle(BOLD)
        text("CLICK SPACE FOR ONE MORE CHANCE", width/2,height/2)
        blink = blink - 10
        if(blink < 0){
            blink = 255
        }
        pop()
    }
    if (lives === 0 || score === 400){
        gamestate = "END"
        push()
        //fill(255,blink)
        textSize(20)
        textStyle(BOLD)

        
        if(score === 400){

            text("CONGRATULATIONS! SCORED 400\n", width/2-50,height/2)
            tint(255,blink)
            image(starImg,width/2,height/2-150)
        }
        else if(lives === 0)
        text("GAME OVER!\n", width/2-50,height/2)

        text("PRESS R TO RESTART",width/2-50,height/2+50)
        
        blink = blink - 10
        if(blink < 0){
            blink = 255
        }
        pop()        
    }   

}
function keyPressed(){
    if(keyCode === 32 && gamestate === "FLY"){
        chain1.attach(bird.body)
        Matter.Body.setPosition( bird.body,{x: 200, y: 40});
        gamestate = "START"
        bird.tra = []
        Matter.Body.setAngle(bird.body, 0)
        
    }
    if (gamestate === "END" && keyCode === 82){
        location.reload()
    }
}

function mouseDragged(){    
    if(gamestate === "START"){
        if(mouseX > 0 && mouseX < 200){
        dragged = true
        }
    }
}
   
/*
function mouseReleased(){   
    
    if(gamestate !== "END"){//} && dragged === true){
        if(mouseX > 0 && mouseX < 200){        
            lives = lives - 1
            chain1.fly();
            gamestate = "FLY";
            dragged = false
        }   
    }

}*/
function mouseReleased(){   
    
    if(gamestate !== "END" && dragged === true){
        lives = lives - 1
        chain1.fly();
        gamestate = "FLY"
        dragged = false
    }   

}

async function getBgImage(){
    var response = await fetch("https://worldclockapi.com/api/json/est/now")
    responseJSON = await response.json()
    var time = responseJSON.currentDateTime
    var hours = time.slice(11,13)

   if(hours > 6 && hours < 19){
        bg = "sprites/bg.png"

    }else{
        bg = "sprites/bg2.png"
    }
    backgroundImg = loadImage(bg)
}

