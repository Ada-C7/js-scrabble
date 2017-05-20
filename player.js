var Scrabble = require("./scrabble");


var Player = function(name) {
  this.name = name;
  this.plays = [];
  this.scrabble = new Scrabble();
};

Player.prototype = {
  play: function(word) {
    if (this.hasWon === true) {
      return false;
    } else {
      this.plays.push(word);
      return this.plays;
    }
  },

  totalScore: function() {
    var wordScore = 0;
    var total = 0;

    this.plays.forEach(function(word){
      wordScore = this.scrabble.score(word);
      total += wordScore;
    }.bind(this));
    return total;
  },

  hasWon: function() {
    if (this.totalScore() >= 100) {
      return true;
    } else {
      return false;
    }
  },

  highestScoringWord: function() {
    return this.scrabble.highestScoreFrom(this.plays);
  },

  highestWordScore: function() {
    var word = this.scrabble.highestScoreFrom(this.plays);
    return this.scrabble.score(word);
  }
};
