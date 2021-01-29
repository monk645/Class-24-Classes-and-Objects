//blueprint for pig
class Pig{
    constructor(x, y){
        var pig_options = {
            restitution:0.8
          }
          this.body = Bodies.rectangle(x, y, 50, 50, pig_options);
          this.width = 50;
          this.height = 50;
          World.add(myWorld, this.body);
    }

    //functions
    display(){
        noStroke();
        fill('red');
        var pos = this.body.position;
        push(); //used for storing new settings
        translate(pos.x, pos.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0,0, this.width,  this.height);
        pop(); //used for restoring old settings
    }
}