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
  var highScoreWord;
  var winningWordLength;

  for (var i = 0; i < arrayOfWords.length; i++) {
    var word = arrayOfWords[i];
    var score = this.score(word);
    var sevenBonus = (winningWordLength == 7);
    var tie = (score == highScore);
    var tieWinner = (!sevenBonus && tie && (word.length == 7 || word.length < winningWordLength));

    if (score > highScore || tieWinner) {
      highScore = score;
      highScoreWord = word;
      winningWordLength = word.length;
    }

    // console.log("++++++++");
    // console.log(word);
    // console.log("score: " + score);
    // console.log("high score: " + highScore);
    // console.log("winning word: " + highScoreWord);
    // console.log("winning word length: " + winningWordLength);
  }
  return highScoreWord;
};

// var highWord = Scrabble.highestScoreFrom(["aaa", "sss", "xxx", "qqaaaa", "xxxf", "jjjf", "qqj", "a", "zzzzzj", "aaaaaad"]);
// console.log(highWord);

var Player = function(name) {
  this.name = name;
  this.plays = [];
};

Player.prototype.play = function(word) {
  if (this.hasWon()) {
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
  return (this.totalScore() > 100) ? true : false;
};

Player.prototype.highestScoringWord = function() {
  word = Scrabble.highestScoreFrom(this.plays);
  if (!word) {
    return this.name + " hasn't played any words yet.";
  }
  return word;
};

Player.prototype.highestWordScore = function() {
  if (this.plays == []) {
    return this.name + " hasn't played any words yet.";
  }
  return Scrabble.score(this.highestScoringWord());
};

// addie = new Player("Addie");
// addie.play("apple");
// console.log(addie.totalScore());
// addie.play("a");
// console.log(addie.totalScore());
// addie.play("q");
// console.log(addie.totalScore());
// console.log(addie.hasWon());
// addie.play("xxxxxx");
// console.log(addie.totalScore());
// addie.play("xxx");
// console.log(addie.totalScore());
// console.log(addie.hasWon());
// addie.play("j");
// console.log(addie.totalScore());
// console.log(addie.hasWon());
// addie.play("x");
// console.log(addie.totalScore());
// console.log(addie.hasWon());
// addie.play("qqaaaa");
// console.log(addie.highestScoringWord());
// console.log(addie.highestWordScore());
// console.log(addie.plays);
// console.log(addie.totalScore());

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

  if (num > 7 || num > this.tilesRemaining() || num < 0) {
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

bag = new TileBag();
console.log(bag.tilesRemaining());
console.log(bag.drawTiles(-1));
console.log(bag.drawTiles(7));
console.log(bag.tilesRemaining());
console.log(bag.drawTiles(7));
console.log(bag.drawTiles(7));
console.log(bag.drawTiles(7));
console.log(bag.drawTiles(7));
console.log(bag.drawTiles(7));
console.log(bag.drawTiles(7));
console.log(bag.drawTiles(7));
console.log(bag.drawTiles(7));
console.log(bag.drawTiles(7));
console.log(bag.drawTiles(7));
console.log(bag.drawTiles(7));
console.log(bag.drawTiles(7));
console.log(bag.drawTiles(7));
console.log(bag.drawTiles(7));
console.log(bag.drawTiles(7));
