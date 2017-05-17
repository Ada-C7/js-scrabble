var Scrabble = require("./scrabble.js");

var Player = function (name){
  this.name = name;
  this.plays  = [];
};
// play(word)
Player.prototype.play = function(word){
  //test word
  //word needs to pushed into plays
  //word needs to be scored?
  //returns false if player has already won
  this.plays.push(word);
};

Player.prototype.totalScore = function(){

};

Player.prototype.hasWon = function(){

};

Player.prototype.highestScoringWord = function() {

};

Player.prototype.highestWordScore = function() {

};

// when I run player.js with the require uptop I am also running any code
// from that file
var player1 = new Player ("cynthia");
console.log(player1.name);
player1.play("hello");
player1.play("cat");
player1.play("dog");
player1.play("xo");
player1.play("zoo");
console.log(player1.plays);
