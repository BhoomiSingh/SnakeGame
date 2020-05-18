var snake;
var foodX,foodY;

function setup() {
  createCanvas(400,400);
  snake = new Snake();
  foodLoc();
  frameRate(3);
}

function draw() {
  background(0);  

  snake.update();
  if(snake.eat(foodX,foodY)){
    foodLoc();
  }
  snake.display();
  fill("red");
  rect(foodX,foodY,20,20);
  snake.gameOver();
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    snake.xdir = -20;
    snake.ydir = 0;
  }
  else if(keyCode === RIGHT_ARROW){
    snake.xdir = 20;
    snake.ydir = 0;
  }
  if(keyCode === UP_ARROW){
    snake.xdir = 0;
    snake.ydir = -20;
  }
  if(keyCode === DOWN_ARROW){
    snake.xdir = 0;
    snake.ydir = 20;
  }
}

function foodLoc (){
  foodX = floor(random(0,20))*20;
  foodY = floor(random(0,20))*20;
}
