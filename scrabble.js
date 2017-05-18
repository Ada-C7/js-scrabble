var Scrabble = function() {

};

// YOUR CODE HERE
Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

// work should be case insensitive
Scrabble.score = function(word) {
  var tiles = {
    "A": 1,
    "B": 3,
    "C": 3,
    "D": 2,
    "E": 1,
    "F": 4,
    "G": 2,
    "H": 4,
    "I": 1,
    "J": 8,
    "K": 5,
    "L": 1,
    "M": 3,
    "N": 1,
    "O": 1,
    "P": 3,
    "Q": 10,
    "R": 1,
    "S": 1,
    "T": 1,
    "U": 1,
    "V": 4,
    "W": 4,
    "X": 8,
    "Y": 4,
    "Z": 10
  };
    word = word.toUpperCase();
    var score = 0;

    if (word.length == 7) {
      score =+ 50;
    }

    for (var i = 0; i < word.length; i++) {
      score += tiles[word[i]];
    }
    return score;
};

Scrabble.highestScoreFrom = function(arrayOfWords) {
  var highestScore = 0,
      winningWord = "";

  for (var i = 0; i < arrayOfWords.length; i++) {
    var score = Scrabble.score(arrayOfWords[i]);
    var word = arrayOfWords[i];

    if (word.length == 7) {
      return word;
    } else if (score > highestScore) {
      winningWord = word;
      highestScore = score;
    } else if (score == highestScore && winningWord.length > word.length) {
      winningWord = word;
      highestScore = score;
      }
  }

  return winningWord;
};

  // if the top score is tied between multiple words, pick the one with the fewest letters
  // If the top score is tied between multiple words and one used all seven letters, choose the one with seven letters over the one with fewer tiles
  // If the there are multiple words that are the same score and same length, pick the first one in supplied list.

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
  return (this.totalScore() >= 100) ? true : false ;
};

Player.prototype.highestScoringWord = function() {
  return Scrabble.highestScoreFrom(this.plays);
};

Player.prototype.highestWordScore = function() {
  return Scrabble.score(this.highestScoringWord());
};

var player = new Player("bob");
player.play("aaa");
console.log(player.plays);
console.log(player.totalScore());
player.play("eee");
console.log(player.plays);
console.log(player.totalScore());
player.play("ooo");
console.log(player.plays);
console.log(player.totalScore());
player.play("uuu");
console.log(player.hasWon());
console.log(player.plays);
console.log(player.totalScore());
console.log(player.highestScoringWord());
console.log(player.highestWordScore());
module.exports = Scrabble;
