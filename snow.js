class Snow{
    constructor(x,y){
        var options={
            'density':0.04,
            'friction':0.5,
            
        }
          this.radius=50;
          this.image=loadImage("snow5.webp");
          this.body=Bodies.circle(x,y,this.radius,options);
          World.add(world,this.body);
    }

    Update(){

    }
    
    display(){
        var pos=this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    }
}