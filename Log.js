class Log extends BaseClass{

  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
    this.image = loadImage("sprites/wood2.png");
    Matter.Body.setAngle(this.body, angle);
  
    this.vis = 255
    this.pos = this.body.position
    this.f = 0
  }


  display(){
    
    
    if(this.body.speed > 5){
      World.remove(world,this.body)
      
      this.vis = this.vis - 5 
      push()
      tint(255,this.vis)
      translate(this.body.position.x, this.body.position.y);
      rotate(this.body.angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
      
    }else{
      super.display()
    }
    
  }
  score(){
    
    if(this.vis ===0){        
      text("+50",this.pos.x,this.pos.y+this.f)
      this.f = this.f - 10
    }else if(this.vis === -10){
      score = score + 50  
    }
      
    
  }

}