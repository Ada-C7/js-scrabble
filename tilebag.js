var Tilebag = function () {
  this.startingTileCounts = {
    J: 1, K: 1, Q: 1, X: 1, Z: 1,
    B: 2, C: 2, F: 2, H: 2, M: 2,
    P: 2, V: 2, W: 2, Y: 2, G: 3,
    D: 4, L: 4, S: 4, U: 4, N: 6,
    R: 6, T: 6, O: 8, A: 9, I: 9,
    E: 12
  };

  this.contents = [];

  this.createTilebag = function () {
    for (var tile in this.startingTileCounts) {
      for (var count = 0; count < this.startingTileCounts[tile]; count++) {
        this.contents.push(tile);
      }
    }

    // Shuffle array using Durstenfeld shuffle algorithm.
    // Found on StackOverflow
    for (var i = this.contents.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = this.contents[i];
      this.contents[i] = this.contents[j];
      this.contents[j] = temp;
    }
  };

  // Runs createTilebag when a new tilebag is created
  this.createTilebag();
};

Tilebag.prototype.drawTiles = function (num) {
  var tilesDrawn = [];
  for (var i = 0; i < num; i++) {
    tilesDrawn.push(this.contents.pop());
  }
  return tilesDrawn;
};

module.exports = Tilebag;
