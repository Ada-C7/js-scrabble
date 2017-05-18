var Scrabble = require('./scrabble');

var Player = function(name, game= new Scrabble()) {
  this.name = name;
  this.plays = ["PURPLE", "PINK"];
  this.scrabble = game;
};

Player.prototype.play = function(word) {
  if (this.hasWon()) { return false };

  var score = this.scrabble.score(word);
  // Only add word to plays array if it is a valid word.
  if (score !== 0) { this.plays.push(word) };
  return score;
};

Player.prototype.totalScore = function() {
  var totalScore = 0;
  var self = this;
  this.plays.forEach(function(word) {
    totalScore += self.scrabble.score(word);
  })
  return totalScore;
};

Player.prototype.hasWon = function() {
  return ( this.totalScore() >= 100 ) ? true : false;
};

Player.prototype.highestScoringWord = function() {
  return this.scrabble.highestScoreFrom(this.plays);
};

Player.prototype.highestWordScore = function() {
  return this.scrabble.highestScore(this.plays);
};

// var my_player = new Player('Ada');
// console.log(my_player.totalScore());
// console.log(my_player.hasWon());
// console.log(my_player.highestScoringWord());
// console.log(my_player.highestWordScore());
// console.log(my_player.play("happy"));
// console.log(my_player.plays);
// console.log(my_player.play(""));
// console.log(my_player.plays);
// console.log(my_player.play(8));
// console.log(my_player.plays);
// console.log(my_player.highestScoringWord());
// console.log(my_player.highestWordScore());
