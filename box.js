//blueprint for box
class Box{
    constructor(x, y, width, height){
        var box_options = {
            restitution:0.8
          }
          this.body = Bodies.rectangle(x, y, width, height, box_options);
          this.width = width;
          this.height = height;
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
        stroke("black")
        rect(0,0, this.width,  this.height);
        pop(); //used for restoring old settings
    }
}