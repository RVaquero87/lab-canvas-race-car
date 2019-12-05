class roadCanvas {
  constructor(){
    this.ctx = document.getElementById('mycanvas').getContext('2d');
  }
  drawCreate(){
    this.createRoad();
    this.createCar();
  }
  createRoad(){
    console.log('hola 1')
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0,0,500,900)
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(20,0,460,900)
    this.ctx.fillStyle = "#fff";
    this.ctx.fillRect(30,0,10,900);
    this.ctx.fillRect(460,0,10,900);
    let yPosition = 10;
    for(let i = 0; i <= 10; i++){
      this.ctx.fillRect(245, yPosition, 10, 75);
      yPosition += 100;
    }
  }
  createCar(){
    let imgCar = new Image();
    imgCar.src = 'images/car.png';
    imgCar.onload = function(){
      console.log(imgCar.width, imgCar.height)
      let proportionCar = imgCar.height/imgCar.width;
      this.ctx.drawImage(imgCar, 250, 750, 70, 70*proportionCar)
    }.bind(this)
  }
}