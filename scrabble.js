var Scrabble = function() {};

Scrabble.score = function(word) {
  var scores = { a: 1, b: 3, c: 3, d: 2,e: 1, f: 4, g: 2, h: 4, i: 1, j: 8, k: 5, l: 1, m: 3, n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t: 1, u: 1, v: 4, w: 4, x: 8, y: 4, z: 10 };
  var total = 0;
  word = word.toLowerCase();

  for (var i = 0; i < word.length; i++) {
    total += scores[word[i]];
  }

  if (word.length == 7) {
    total += 50;
  }
  return total;
};

Scrabble.highestScoreFrom = function(arrayOfWords) {
  var highScore = -1;
  var highScoreWord = "";

  for (var i = 0; i < arrayOfWords.length; i++) {
    var word = arrayOfWords[i];
    var score = this.score(word);
    var sevenBonus = (highScoreWord.length == 7);
    var tie = (score == highScore);
    var tieWinner = (!sevenBonus && tie && (word.length == 7 || word.length < highScoreWord.length));

    if (score > highScore || tieWinner) {
      highScore = score;
      highScoreWord = word;
    }
  }
  return highScoreWord;
};

var Player = function(name) {
  this.name = name;
  this.plays = [];
};

Player.prototype.play = function(word) {
  if (this.hasWon()) {
    console.log("You can't play more - you've already won!");
    return false;
  }
  this.plays.push(word);
};

Player.prototype.totalScore = function() {
  var total = 0;

  for (var i = 0; i < this.plays.length; i++) {
    total += Scrabble.score(this.plays[i]);
  }
  return total;
};

Player.prototype.hasWon = function() {
  return (this.totalScore() > 100);
};

Player.prototype.highestScoringWord = function() {
  word = Scrabble.highestScoreFrom(this.plays);
  if (!word) {
    console.log(this.name + " hasn't played any words yet.");
    return false;
  }
  return word;
};

Player.prototype.highestWordScore = function() {
  if (this.plays.length === 0) {
    console.log(this.name + " hasn't played any words yet.");
    return false;
  }
  return Scrabble.score(this.highestScoringWord());
};

var TileBag = function() {
  var bag = ["a", "a", "a", "a", "a", "a", "a", "a", "a", "b", "b", "c", "c", "d", "d", "d", "d", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "f", "f", "g", "g", "g", "h", "h", "i", "i", "i", "i", "i", "i", "i", "i", "i", "j", "k", "l", "l", "l", "l", "m", "m", "n", "n", "n", "n", "n", "n", "o", "o", "o", "o", "o", "o", "o", "o", "p", "p", "q", "r", "r", "r", "r", "r", "r", "s", "s", "s", "s", "t", "t", "t", "t", "t", "t", "u", "u", "u", "u", "v", "v", "w", "w", "x", "y", "y", "z"];
  this.tiles = TileBag.shuffle(bag);
};

TileBag.shuffle = function(tiles) {
  for (var i = 0; i < tiles.length; i++) {
    var j = Math.floor(Math.random() * tiles.length);
    var temp = tiles[i];
    tiles[i] = tiles[j];
    tiles[j] = temp;
  }
  return tiles;
};

TileBag.prototype.drawTiles = function(num) {
  var tilesDrawn = [];

  if (num > 7) {
    console.log("You can't drawn more than 7 tiles.");
    return false;
  }
  if (num > this.tilesRemaining()) {
    console.log("There aren't enough tiles in the bag.");
    return false;
  }
  if (num <= 0) {
    console.log("You must draw at least one tile.");
    return false;
  }

  for (var i = 0; i < num; i++) {
    tilesDrawn.push(this.tiles.pop());
  }

  return tilesDrawn;
};

TileBag.prototype.tilesRemaining = function(num) {
  return this.tiles.length;
};
