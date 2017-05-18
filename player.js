var Scrabble = require("./scrabble.js");

var Player = function (name){
  this.name = name;
  this.plays  = [];
  this.score = 0;
};

// tests word only includes letters - adds word to plays array as long as player has not already won
Player.prototype.play = function(word){
  if ( this.hasWon() || this._testWord(word) === false ) { return false; }
  this.plays.push(word);
};

// calculates player's total score from all words in the plays array
Player.prototype.totalScore = function(){
  this.plays.forEach(function (word){
    var points = Scrabble.score(word);
    this.score += points;
  }.bind(this));
  // the bind function will "bind" that this referes to the object of the function totalScore - the player
  // js won't assign this to refer to object of the forEach function
};

// returns true if player has score equal or greater than 100
Player.prototype.hasWon = function(){ return this.score >= 100 ? true : false };

// finds the higest scoring word by calling the scrabble object's function
Player.prototype.highestScoringWord = function() {
  return Scrabble.highestScoreFrom(this.plays);
};

// find the score of that the highest scoring word - uses the scrabble object's functions
Player.prototype.highestWordScore = function() {
  var word = this.highestScoringWord();
  var score = Scrabble.score(word);
  return score;
};

Player.prototype._testWord = function(word) { return /^[a-zA-Z]+$/.test(word); }

// crate a new player by providing a name
var player1 = new Player ("cynthia");
console.log(player1.name);

// can make plays with different words
player1.play("hellooo");
player1.play("ooolleh");
player1.play("dog");
player1.play("xo");
player1.play("zoo");

// // words that will fail - should all out put false
// console.log(player1.play("cat1"));
// console.log(player1.play("123"));
// console.log(player1.play("cat dog"));
// console.log(player1.play(123));
// console.log(player1.play(["cat", "dog"]));
// console.log(player1.play("cat-dog"));

// output list of all words played
console.log(player1.plays);

// output the players total score
player1.totalScore();
console.log(player1.score);

// manual test the hasWon function
console.log(player1.hasWon());
// playr1.play("z");

// manual test of the highestScoringWord and highestWordScore functions
console.log(player1.highestScoringWord());
console.log(player1.highestWordScore());
