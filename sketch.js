var backgroundImage,background1,player, player_running, ground,ground_img, FoodGroup, bananaImage,obstaclesGroup, obstacle_img,gameOver,score=0;


function preload(){
  backgroundImage=loadImage("jungle.jpg");
  player_running= loadAnimation ("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstacle_img = loadImage("stone.png"); 
  
}

function setup() {
  createCanvas(800,400);
  player= createSprite(100,340,20,50);
  player.addAnimation("running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  ground.visible=false;
  
  background1=createSprite(0,0,800,400);
  background1.addImage(backgroundImage);
  background1.scale=1.5;
  background1.x=background1.width/2;
  background1.velocityX=-4;
  FoodGroup = new Group();
  obstaclesGroup = new Group();
  
  score = 0;
}

function draw() {
  
  background(255);
  
    
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  if(background1.x<100){
    background1.x=background1.width/2;
  }
  
    if(FoodGroup.isTouching(player)){
      FoodGroup.destroyEach();
    score = score + 2;
    }
  
  switch (score) {
      
    case 10: player.scale=0.14;
      break;
      
      case 20: player.scale=0.16;
      break;
      
      case 30: player.scale=0.18;
      break;
      
      case 40: player.scale=0.2;
      break;
      
  }
  
  if (player.isTouching(obstaclesGroup)) {
      player.scale=0.08;
      
      
      }
     
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);
    spawnFood();
    spawnObstacles();
 
     drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50); 
  
 
}

function spawnFood() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -5;
    banana.lifetime = 300;
    player.depth = banana.depth + 1;
    FoodGroup.add(banana);
  }
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(800,350,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacle_img);     
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle);
  }
}


  
