

var Player = function(name, game) {
  this.name = name;
  this.game = game;
  this.plays = [];
};

Player.prototype = {
  play: function(word) {
    this.plays.push(word)
    return this.plays
  },

  totalScore: function() {
    var allScore = 0;
    this.plays.forEach(function(word){
      allScore += this.game.score(word)
    })
    return allScore
  },
  hasWon: function() {
    var score = this.totalScore();
    if(score > 100) {
      return true;
    } else {
      return false;
    }
  },
  // Function which returns the highest scoring word the user has played
  highScoringWord: function() {
    var highestWord = this.game.highestScoreFrom(this.plays);
    return highestWord
  },
  //  Function which returns the highestScoringWord score
  highestWordScore: function (){
    var highestWord = this.highScoringWord()
    var highScore = this.game.score(highestWord)
    return highScore
  }
  //end
};

var Scrabble = require("./scrabble") // do this here to pass in an instance of scrabble every time a player is created
var firstGame = new Player("Marisol", new Scrabble())
console.log(firstGame.play("apple"))
console.log(firstGame.play("notebook"))
console.log(firstGame.play("google"))

console.log(firstGame.totalScore())

// module.exports = Player;
