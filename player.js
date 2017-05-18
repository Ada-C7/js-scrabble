var Scrabble = require('./scrabble');

// PLAYER Constructor
var Player = function(name) {
  this.name = name;
  this.plays = [];
  this.score = 0;
  this.won = false;
};

// PLAYER Prototype - function for Player to play(word)
Player.prototype.play = function(word) {
  var single_score = Scrabble.prototype.scoreWord(word);
  this.score += single_score;
  return single_score;
};

// PLAYER Prototype - function to return totalScore()
Player.prototype.totalScore = function() {
  return this.score;
}; //funtion not necessary? .score does the same thing

// PLAYER Prototype - function to show win (T/F)
// Player.prototype.hasWon = function() {
//   if =< 100 points
// }

// PLAYER Prototype - function to return highest WORD
// Player.prototype.highestScoringWord = function() {
// returns one word
// }

// PLAYER Prototype - function to return highest SCORE
// Player.prototype.highestWordScore = function() {
// returns a score
// }

// print out single player data
var tamiko = new Player("Tamiko");

console.log(tamiko.name);
console.log(tamiko.play("zzz"));
console.log(tamiko.totalScore());

// console.log(player1.name);
// console.log(player1.plays);
// console.log(player1.play("aaa"));

// console.log(Object.getPrototypeOf(Scrabble));
// console.log(tamiko.score);

// console.log(tamiko.plays);
