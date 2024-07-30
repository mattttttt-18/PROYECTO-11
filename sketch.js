
var barco, barco_A;
var mar, marImg;

function preload(){
  marImg = loadImage("sea.png");
  barco_A = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}


function setup(){
  createCanvas(400,400);
  
  mar = createSprite(200,300,400,200);
  mar.x=200;
  mar.y=0;
  mar.velocityX= -3;
  mar.scale = 1;
  mar.addImage("mar_lol",marImg);

  barco = createSprite(150,150,45,50);
  barco.addAnimation("animacion",barco_A);
  barco.scale = 0.3;
  barco.x=150;
  barco.y=150;
}


function draw() {

  background("blue");

  if (mar.x < 0){
    mar.x = mar.width/2;
  }

  drawSprites();
}
