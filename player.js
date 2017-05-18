var Scrabble = require('./scrabble');

// PLAYER Constructor
var Player = function(name) {
  this.name = name;
  this.plays = [];
  this.score = 0;
};

// PLAYER Prototype - function for Player to play(word)
Player.prototype.play = function(word) {
  Scrabble.scoreWord.call(this, word);
};

// PLAYER Prototype - function to return totalScore()
// Player.prototype.totalScore = function() {
// ;
// }

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
var player1 = my_game.addPlayer("Tamiko");
var player2 = my_game.addPlayer("Tofu");
console.log(my_game.players);

console.log(my_game.scoreWord.call(player1, "aaa"));

// console.log(player1.name);
// console.log(player1.plays);
// console.log(player1.play("aaa"));

// console.log(Object.getPrototypeOf(Scrabble));
// console.log(tamiko.score);

// console.log(tamiko.plays);
