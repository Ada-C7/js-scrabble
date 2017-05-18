// var Scrabble = require('./scrabble');
var Player = function(name, game) {
  this.name = name ;
  this.game = game
  this.plays = [];
};

Player.prototype = {
  play: function(word) {
    this.plays.push(word)
    //need to return false if already won
  },

  totalScore: function() {
    var self = this
    var score = 0
    // Function which sums up and returns the score of the players words
    this.plays.forEach(function(word) {
      score += self.game.scoreWord(word)
    })
    console.log("Your total score is: " + score)
    return score
  },

  hasWon: function() {
    var self = this
    var score = self.totalScore()
    if (score >= 100) {
      console.log("You won with a score of: " + score)
      return score
    } else {
      console.log("You haven't won yet. Your current score is: " + score)
      return score
    }
  },

  highestScoringWord: function() {
    var self = this
    var highest_score_word = self.game.highestScoreFrom(this.plays)
    console.log("the highest scoring word is: " + highest_score_word)
    return highest_score_word
  },

  highestScoringWordScore: function () {
    var self = this
    var highest_scoring_word = self.highestScoringWord()
    var highest_word_score = self.game.scoreWord(highest_scoring_word)
    console.log("The score of the highest scoring word is: " + highest_word_score)
    return highest_word_score
  }

};

var Scrabble = require('./scrabble') // do this here to pass in an instance of scrabble every time a player is created
var gameOne = new Player("fido", new Scrabble())
gameOne.play("yep");
gameOne.play("jazzily");
gameOne.totalScore();
gameOne.highestScoringWord();
gameOne.highestScoringWordScore();
gameOne.hasWon();
console.log(gameOne)

module.exports = Player;
//telling it to send the player to the scrabble (whereever it's required)
