class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.vis = 255
  }
  display(){
    
    
    if(this.body.speed > 4){
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
    if(this.vis < 255 && this.vis >0){
      score = score + 4
    }
  }

}