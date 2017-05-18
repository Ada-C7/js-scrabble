var Scrabble = require("./scrabble");

var Player = function(name) {
  this.name = name;
  this.plays = [];
};

Player.prototype = {
  play: function(word) {
    // adds input word to plays array
    // returns false if player has already won
    if (this.hasWon() == true) {
      return false;
    } else {
    this.plays.push(word);
    };
  },
  totalScore: function() {
    // sums up and returns score of all the player's words
    var totalScore = 0;
    this.plays.forEach(function(word){
      totalScore += Scrabble.score(word);
    });
    return totalScore;
  },
  hasWon: function() {
    // this greater than is already going to return true or false, so no need for if statement or ternary
    return (this.totalScore()) > 100;
  },
  highestScoringWord: function() {
    // returns the highest scoring word
    return Scrabble.highestScoreFrom(this.plays);
  },
  highestWordScore: function() {
    // returns the score of the highest scoring word
    return Scrabble.score(this.highestScoringWord());
  }
};


// prompts for trying it out!
var cooper = new Player("Agent Cooper");
cooper.play("coffee");
cooper.play("pie");
// cooper.play("zzzzzzzz");
// cooper.play("zzzzzzzz");
// cooper.play("zzzzzzzz");
console.log(cooper.plays);
console.log(cooper.highestScoringWord());
console.log(cooper.highestWordScore());
// console.log(cooper.totalScore());
