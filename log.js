//blueprint for log
class Log{
    constructor(x, y, height, angle){
        var log_options = {
            restitution:0.8,
            'friction':1.0,
            'density':1.0
          }
          this.body = Bodies.rectangle(x, y, 20, height, log_options);
          this.width = 20;
          this.height = height;
          //Matter.Body.setAngle(body, angle)
          Matter.Body.setAngle(this.body, angle)
          World.add(myWorld, this.body);
    }

    //functions
    display(){
        fill('white');
        var pos = this.body.position;
        push(); //used for storing new settings
        translate(pos.x, pos.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("brown")
        rect(0,0, this.width,  this.height);
        pop(); //used for restoring old settings
    }
}