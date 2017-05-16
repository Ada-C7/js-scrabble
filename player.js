var Scrabble = require('./scrabble');

var Player = function(name) {
  this.name = name;
  this.plays = [];
};

Player.prototype.play = function(word){
  this.plays.push(word);
  if (this.hasWon() == false){
    return false;
  }
  else {
    return true;
  }
};

Player.prototype.totalScore = function(){
  var total = 0;
  this.plays.forEach(function(word){
    total += Scrabble.prototype.score(word);
  });
  return total;
};

Player.prototype.hasWon = function(){
  if (this.totalScore() >= 100){
    return true;
  }
  else {
    return false;
  }
};

Player.prototype.highestScoringWord = function(){
  var result = Scrabble.prototype.highestScoreFrom(this.plays);
  return result;
};

Player.prototype.highestWordScore = function(){
  var result = Scrabble.prototype.score(this.highestScoringWord());
  return result;
};


module.exports = Player;
