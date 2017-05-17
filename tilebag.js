var TileBag = function() {
  var notShaffledTiles = ["D","L","S","U","D","L","S","U","D","L","S",
  "U","D","L","S","U","G","G","G","Q","J","K",
  "X","Z","M","B","C","F","H","V","W","Y","P",
  "M","B","C","F","H","V","W","Y","P","E","E",
  "E","E","E","E","E","E","E","E","E","E","I",
  "I","I","I","I","I","I","I","I","O","O","O",
  "O","O","O","O","O","R","R","R","R","R","R",
  "T","T","T","T","T","T","N","N","N","N","N",
  "N"];
  this.tileBag = TileBag.prototype.shuffleBag(notShaffledTiles);
};

TileBag.prototype.shuffleBag = function(array){
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

TileBag.prototype.drawTiles = function(number){
  var drawnTiles = [];
  for(var i = 0; i < number; i++){
    drawnTiles.push(this.tileBag.shift());
  }
  return drawnTiles;
};

TileBag.prototype.tilesRemaining = function(){
  return this.tileBag;
};


module.exports = TileBag;
