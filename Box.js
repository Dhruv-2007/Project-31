class Box{
  constructor(x,y,width,height) {
    this.body = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;
    this.Visibility = 255;
    World.add(world, this.body);
  }
  display(){
  
      if(this.body.speed <5){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
                 } else {

        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility -5;
        pop();
      }
    }  
 Score(){
  if(this.Visibility < 250 && this.Visibility > -251){
    score++
   }
  }
}