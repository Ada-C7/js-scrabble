var Scrabble = require("./scrabble.js");

var Player = function (name){
  this.name = name;
  this.plays  = [];
  this.score = 0;
};

// tests word only includes letters - adds word to plays array as long as player has not already won
Player.prototype.play = function(word){
  //test word?

  if ( this.hasWon() ) { return false; }

  this.plays.push(word);
};

// calculates player's total score from all words in the plays array
Player.prototype.totalScore = function(){
  var totalScore = 0;

  this.plays.forEach(function (word){
    var points = Scrabble.score(word);
    totalScore += points;
  });

  this.score = totalScore;
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


// crate a new player by providing a name
var player1 = new Player ("cynthia");
console.log(player1.name);

// can make plays with different words
player1.play("hellooo");
player1.play("cat");
player1.play("dog");
player1.play("xo");
player1.play("zoo");

// output list of all words played
console.log(player1.plays);

// output the players total score
player1.totalScore();
console.log(player1.score);

// manual test o the hasWon function
console.log(player1.hasWon());
playr1.play("z");

// manual test of the highestScoringWord and highestWordScore functions
console.log(player1.highestScoringWord());
console.log(player1.highestWordScore());
