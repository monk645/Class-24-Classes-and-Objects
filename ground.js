//blueprint for ground
class Ground{
    constructor(x, y, width, height){
        var ground_options = {
            isStatic:true
          }
          this.body = Bodies.rectangle(x, y, width, height, ground_options);
          this.width = width;
          this.height = height;
          World.add(myWorld, this.body);
    }

    //functions
    display(){
        fill('brown');
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}