var Scrabble = require('./scrabble');

var scrabble = new Scrabble();

var Player = function(name) {
  this.name = name;
  this.plays = [];
};

Player.prototype = {
  play : function(word) {
    this.plays.push(word);
    if (this.hasWon() === true) {
      return false;}
      else{
        return scrabble.score(word)};
      },

    totalScore: function() {
        var score = 0;
        this.plays.forEach(function(word){
          score += scrabble.score(word);
        });
        return score;
    },

    hasWon: function() {
      if(this.totalScore() > 100) {
        return true;
      } else {
        return false;
      }
    },

    highestScoringWord: function() {
      return scrabble.highestScoreFrom(this.plays);
    }
  }

  var player = new Player("Jamie");
  // console.log(player.play("hi"));
  // console.log(player.play("jamie"));
  // console.log(player.play("banana"));
  ["banana", "ox", "apple"].forEach(function (word) {
    console.log(player.play(word))
  });

  console.log(player.highestScoringWord(["natalia","banana", "chair"]));




  module.exports = Player;
