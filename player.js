var Scrabble = require('./scrabble.js');

var Player = function(name){
  this.name = name;
  this.plays = [];
};

Player.prototype = {
  winningScore: 100,

  totalScore: function(){
    score = 0;
    this.plays.forEach(function(word) {
      score += Scrabble.score(word);
    });
    return(score);
  },

  hasWon: function(){
    return(this.totalScore() > winningScore);
  },

  play: function(word) {
    if (this.hasWon()) {
      console.log("No need to play, " + this.name +
      ".  You've already won.");
    } else {
      this.plays.push(word);
    }
  },

  highestScoringWord: function(){
    return(Scrabble.highestScoreFrom(this.plays));
  },

  highestWordScore: function(){
    return(Scrabble.score(this.highestScoringWord));
  }
};
