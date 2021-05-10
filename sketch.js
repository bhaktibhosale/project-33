const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var snownightImg;
var engine;
var world;

// declare the variables for max no. of snow droplets, snow object, array to store the snow droplets

function preload(){
  snownightImg=loadImage("snow2.jpg");
}


function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;

  // create sprite object and add image for a character

 // createSprite(400, 200, 50, 50);

 // write the code to create the snow droplet using random function

}

function draw() {

  // Update your engine

  background(snownightImg); 
  
  // write code to move on the character when keydown right or left 

  // Use for loop to display the falling snow, also update the snow droplets when they reach bottom

  //drawSprites();
}