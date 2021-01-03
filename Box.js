class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/wood1.png");

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
    
      imageMode(CENTER);
      image(this.image,this.body.position.x, this.body.position.y , this.width, this.height);
      pop()
      
    }else{
      super.display()
    }
    
  }
  score(){
    
    if(this.vis ===0){        
      text("+100",this.pos.x,this.pos.y+this.f)
      this.f = this.f - 10
    }else if(this.vis === -10){
      score = score + 100  
    }
      
    
  }

}