class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    Matter.Body.setDensity(this.body,2)
    this.tra = [];
    this.sImage = loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.position.x > 200 && gamestate === "FLY"){
      var pos = [this.body.position.x, this.body.position.y]
      this.tra.push(pos);
    }
    //console.log(this.tra)
    for(var i = 0; i < this.tra.length; i = i+1){
      image(this.sImage, this.tra[i][0],this.tra[i][1])
    }
  }
}
