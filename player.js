"use strict";

var Scrabble = require('./scrabble');
var TileBag = require('./TileBag');

var Player = function(name) {
  this.name = name;
  this.plays = [];
};

Player.prototype.play = function(word) {
  if (this.hasWon() == true) {
    return false;
  } else {
    this.plays.push(word);
    // for(var i = 0; i < word.length + 1; i++) {
    //
    // }
  }
};

Player.prototype.totalScore = function() {
    var sum = 0;
    this.plays.forEach(function (word) {
      sum += Scrabble.prototype.score(word);
    });
    return sum;
};

Player.prototype.hasWon = function() {
  return (this.totalScore() > 100) ? true : false;
};

Player.prototype.highestScoringWord = function() {
  return Scrabble.prototype.highestScoreFrom(this.plays);
};

Player.prototype.highestWordScore = function() {
  var word = Scrabble.prototype.highestScoreFrom(this.plays);
  return Scrabble.prototype.score(word);
};

var wolf = new Player("wolf");

console.log(wolf.plays);
wolf.play("apple");
wolf.play("potatos");

console.log(wolf.highestWordScore());

module.exports = Player;
