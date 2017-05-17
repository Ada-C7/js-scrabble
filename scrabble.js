// Given sample
// var Scrabble = function() {};
//
// // YOUR CODE HERE
// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
// };
//
// module.exports = Scrabble;

var scoreChart = {
  'A' : 1, 'E' : 1, 'I' : 1, 'O' : 1, 'U' : 1,
  'L' : 1, 'N' : 1, 'R' : 1, 'S' : 1, 'T' : 1,
  'D' : 2, 'G' : 2,
  'B' : 3, 'C' : 3, 'M' : 3, 'P' : 3,
  'F' : 4, 'H' : 4, 'V' : 4, 'W' : 4, 'Y' : 4,
  'K' : 5,
  'J' : 8, 'X' : 8,
  'Q' : 10, 'Z' : 10
};

// SCRABBLE
// constroctor -- instance variables
var Scrabble = function(input) {
  this.word = input.toUpperase();
  /* how to put in the score chart?
  Before I thought I put it in here as an object
  Now I have it as a hash*/
};

// iterators -- instance methods
Scrabble.prototype.score = function() {
  var sum = 0;
  for (var i = 0; i < this.word.length; i++) {
    sum += scoreChart[this.word[i]];
  }
  return sum;
};

Scrabble.prototype.highestScoreFrom = function() {

};

// initializer
module.exports = Scrabble;


// Player
// constroctor -- instance variables
var Player = function(input) {
  this.name = input;
};

// iterators -- instance methods
Player.prototype.play = function() {

};

Player.prototype.totalScore = function() {

};

Player.prototype.hasWon = function() {

};

Player.prototype.highestScoringWord = function() {

};

Player.prototype.highestWordScore = function() {

};

// initializer
module.exports = Player;
