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
    var tieWinner = (!sevenBonus && (word.length == 7 || word.length < winningWordLength));

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

var highWord = Scrabble.highestScoreFrom(["aaa", "sss", "xxx", "qqaaaa", "qqqqqj", "aaaaaag"]);
console.log(highWord);

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

module.exports = Scrabble;
// module.exports = Player;
