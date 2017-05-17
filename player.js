var Scrabble = require("./scrabble.js");

var Player = function (name){
  this.name = name;
  this.plays  = [];
  this.score = 0;
};

Player.prototype.play = function(word){
  //test word?
  //returns false if player has already won
  if ( this.hasWon() ) { return false; }
  this.plays.push(word);
};

Player.prototype.totalScore = function(){
  var totalScore = 0;

  // it appears if you use this - it will refere to the word not the player inside
  // this forEach
  this.plays.forEach(function (word){
    var points = Scrabble.score(word);
    totalScore += points;
  });

  this.score = totalScore;
};

// returns true if player has won
Player.prototype.hasWon = function(){ return this.score >= 100 ? true : false };

Player.prototype.highestScoringWord = function() {
  return Scrabble.highestScoreFrom(this.plays);
};

Player.prototype.highestWordScore = function() {

};

// when I run player.js with the require uptop I am also running any code
// from that file
var player1 = new Player ("cynthia");
console.log(player1.name);
player1.play("hellooo");
player1.play("cat");
player1.play("dog");
player1.play("xo");
player1.play("zoo");
// player1.play("zzz")
console.log(player1.plays);
player1.totalScore();
console.log(player1.score);
// console.log(player1.hasWon());
// playr1.play("z");
console.log(player1.highestScoringWord());
