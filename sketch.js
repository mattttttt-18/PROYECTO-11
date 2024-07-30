var barco, barco_A;
var mar, marImg;

function preload(){
  marImg = loadImage("sea.png");
  barco_A = loadAnimation("ship-1","ship-2","ship-3","ship-4");
}


function setup(){
  createCanvas(400,400);
  barco = createSprite(150,150,45,50);
  barco.addAnimation("animacion", barco_A);
  barco.scale = 0.3;
  barco.x=150;
  barco.y=150;
  mar = createSprite(200,300,400,200);
  mar.x=200;
  mar.y=300;
  mar.velocityX= -10;
  mar.addImage("mar_lol", marImg);
}


function draw() {

  background("blue");
  if (mar.x < 0){
    mar.x = mar.width/2;
  }
}