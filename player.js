var Scrabble = require('./scrabble');

var Player = function(name) {
  this.name = name;
  this.plays = [];
};

Player.prototype.play = function(word) {
  if (this.hasWon() == true) {
    return false;
  } else {
    this.plays.push(word);
    return true;
  };
};

// Function which sums up and returns the score of the players words
Player.prototype.totalScore = function() {
  var sum = 0;
  this.plays.forEach(function(word) {
    sum += Scrabble.prototype.score(word);
  });
  return sum;
};

// hasWon(): Function which returns true if the player has over 100 points, otherwise returns false
Player.prototype.hasWon = function() {
  if (this.totalScore >= 100) {
    return true;
  } else {
    return false;
  };
};

// highestScoringWord(): Function which returns the highest scoring word the user has played
Player.prototype.highestScoringWord = function() {
  word = Scrabble.prototype.highestScoreFrom(this.plays);
  return word;
};

// highestWordScore(): Function which returns the highestScoringWord score
Player.prototype.highestWordScore = function() {
  var word = this.highestScoringWord(this.plays);
  var score = Scrabble.prototype.score(word);
  return score;
};

var me = new Player("Sahana");
console.log(me.plays);
console.log(me.play("hello"));
console.log(me.play("hi"));
console.log(me.plays);
console.log(me.totalScore());
console.log(me.hasWon());
console.log(me.highestScoringWord());
console.log(me.highestWordScore());
