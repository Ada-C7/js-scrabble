"use strict";

var TileBag = function() {
  //  var newBag = this.generateBag();
  this.currentBag = this.generateBag();
};

TileBag.prototype.generateBag = function() {
  var tileAmounts = {
    "a": 9,
    "b": 2,
    "c": 2,
    "d": 4,
    "e": 12,
    "f": 2,
    "h": 2,
    "i": 9,
    "j": 1,
    "k": 1,
    "l": 4,
    "m": 2,
    "n": 6,
    "o": 8,
    "p": 2,
    "q": 1,
    "r": 6,
    "s": 4,
    "t": 6,
    "u": 4,
    "v": 2,
    "w": 2,
    "x": 1,
    "y": 2,
    "z": 1
  },
  tileBag = [];
  Object.keys(tileAmounts).forEach(function(letter) {
    for(var i = 0; i < tileAmounts[letter]; i++) {
      tileBag.push(letter);
    }
  });
  return tileBag;
};

TileBag.prototype.drawTiles = function(num) {
  var hand = [];
  for (var i = 0; i < num; i++) {
    var randomIndex = Math.floor(Math.random() * this.currentBag.length);
    hand.push(this.currentBag[randomIndex]);
    this.currentBag.splice(randomIndex, 1);
  }
  return hand;
};

TileBag.prototype.tilesRemaining = function() {
  return this.currentBag.length
}

var tile = new TileBag;

console.log(tile.currentBag);
console.log(tile.drawTiles(70));
console.log(tile.currentBag);
console.log(tile.drawTiles(10));
console.log(tile.currentBag.length);
console.log(tile.tilesRemaining());

module.exports = TileBag;
