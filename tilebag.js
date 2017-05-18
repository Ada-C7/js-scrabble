var util = require('./util');


// CONSTRUCTOR ****************************************************
var TileBag = function(){
  this.tilebag
  this.bagOfLetters = {A:9, B:2, C:2, D:4, E:12, F:2, G:3, H:2, I:9, J:1, K:1, L:4, M:2, N:6, O:8, P:2, Q:1, R:6, S:4, T:6, U:4, V:2, W:2, X:1, Y:2, Z:1};
};


// PROTOTYPES ****************************************************
TileBag.prototype.drawTiles = function(numOfTiles) {
  var tilesDrawn = [];
  for (var i = 0; i < numOfTiles; i++) {
    var draw = util.random(Object.keys(this.bagOfLetters));
    tilesDrawn.push(draw);
    this.bagOfLetters[draw] -= 1;
    if (this.bagOfLetters[draw] === 0) {
      delete this.bagOfLetters[draw];
    };
  };
  return tilesDrawn
};

TileBag.prototype.tilesRemaining = function() {
  var valuesArray = util.values(this.bagOfLetters);
  return util.sum(valuesArray);
}

module.exports = TileBag;


// TESTING the OUTPUT ****************************************************
console.log();
console.log("***************************");
console.log("TESTS OF TILEBAG");

/*
var testBag = new TileBag;
console.log(testBag.tilesRemaining());
console.log(testBag.drawTiles(4));
console.log(testBag.tilesRemaining());
console.log(testBag.drawTiles(90));
console.log(testBag.tilesRemaining());
console.log(testBag.bagOfLetters);
*/
