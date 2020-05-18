class Snake {
    constructor(){
     this.snakeXPosition = [];    
     this.snakeYPosition = [];    
     this.xdir = 0;               
     this.ydir = 0;               
     this.tailCount = 1;          
     this.x =0;
     this.y = 0;                  
    }

    update(){    
      if(!this.gameOver()){
        this.x += this.xdir;
        this.y += this.ydir;
        if(this.snakeXPosition.length >= this.tailCount){
          this.snakeXPosition.shift();
          this.snakeYPosition.shift();
        }
        this.snakeXPosition.push(this.x);
        this.snakeYPosition.push(this.y);
    }
    }
    
    eat(x,y){
     if(this.x===x && this.y===y){  
    this.tailCount++;
     return true;
     }
     else{
     return false;
     }
    }
    
    gameOver(){
      if(this.x > 400 || this.x < 0 || this.y > 400 || this.y < 0){
        background("Red");
        return true;
      }
      else return false;
    }
    
    display(){
      console.log("Snake Position Length: "+this.snakeXPosition.length);
      console.log("Tail COunt: "+this.tailCount);
      for(var i= 0;i<this.tailCount;i++){
        var y = this.snakeYPosition[i];
        var x = this.snakeXPosition[i];
        fill(255);
        rect(x,y,20,20);
      } 

}
}
