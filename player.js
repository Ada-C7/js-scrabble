
var Scrabble = require('./scrabble');

var Player = function(name) {
  this.name = name;
  this.plays = [];
};

Player.prototype.play = function(word) {
  this.plays.push(word);
  return this.plays;
};

Player.prototype.totalScore = function() {
  var currentScore = 0
  // var self = this
  this.plays.forEach(function(word) {
    currentScore += Scrabble.wordScore(word);
  });
  return currentScore;
};

Player.prototype.hasWon = function() {
  return (this.totalScore() > 100);
};

Player.prototype.highestScoringWord = function() {
  return Scrabble.highestScoreFrom(this.plays);
};

var ting = new Player("ting");
console.log(ting.play("hello"));
console.log(ting.play("xylophone"));
console.log(ting.play("zzzzzzzzz"));
console.log(ting.totalScore());
console.log(ting.hasWon());
console.log(ting.play("apple"));
console.log(ting.highestScoringWord());
