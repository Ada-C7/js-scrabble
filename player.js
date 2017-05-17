// Create a new Player object. The object should have the following functions:
//
// Constructor: Called when you use new Player(name), sets up an instance with the instance variable name assigned
// name: property which returns the value of the player's name
// plays: property which returns an Array of the words played by the player
// play(word): Function which adds the input word to the plays Array
// Returns false if player has already won
// totalScore(): Function which sums up and returns the score of the players words
// hasWon(): Function which returns true if the player has over 100 points, otherwise returns false
// highestScoringWord(): Function which returns the highest scoring word the user has played
// highestWordScore(): Function which returns the highestScoringWord score
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
    console.log(score)
    return score
  },

  hasWon: function() {
    var self = this
    var score = self.totalScore()
    if (score >= 100) {
      console.log("You won with a score of " + score)
      return score
    } else {
      console.log("You haven't won yet")
      return score
    }
  },

  highestScoringWord: function() {
    var self = this
    var highest_score = self.game.highestScoreFrom(this.plays)
    console.log("the highest scoring word is " + highest_score)
    // return highest_score
  },

  highestScoringWordScore: function () {

  }

};

var Scrabble = require('./scrabble') // do this here to pass in an instance of scrabble every time a player is created
var gameOne = new Player("fido", new Scrabble())
gameOne.play("yep");
gameOne.play("jazzily");
gameOne.totalScore();
gameOne.highestScoringWord();
gameOne.hasWon();
console.log(gameOne)

module.exports = Player;
//telling it to send the player to the scrabble (whereever it's required)
