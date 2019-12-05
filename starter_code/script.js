window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    console.log('entro en click')
    startGame();
  };

  function startGame() {
    console.log('hola')
    road = new roadCanvas();
    road.drawCreate()
  }

};
