var Scrabble = require('./scrabble');

var Player = function(name) {
  this.name = name;
  this.plays = [];
};

Player.prototype.play = function(word) {
  // if (hasWon() == true) {
  //   return false;
  // } else {
    this.plays.push(word);
    return true;
  // };
};

// Function which sums up and returns the score of the players words
Player.prototype.totalScore = function() {
  var sum = 0;
  this.plays.forEach(function(play) {
    sum += Scrabble.prototype.score(play);
  });
  return sum;
};



var me = new Player("Sahana");
console.log(me.plays);
console.log(me.play("hello"));
console.log(me.plays);
console.log(me.totalScore());
