

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

  // totalScore: function() {
  //   var allScore = 0;
  //   for (var i = 0; i < this.plays.length; i++){
  //     allScore += this.game.score(this.plays[i])
  //   }
  //   return allScore
  // },

  totalScore: function() {
    var allScore = 0;

    this.plays.forEach(function(word){
      allScore += this.game.score(word)
    }.bind(this))
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
    var highestWord = Scrabble.prototype.highestScoreFrom(this.plays);
    return highestWord;
  },
  //  Function which returns the highestScoringWord score
  highestWordScore: function (){
    var highestWord = this.highScoringWord(this.plays);
    var highScore = Scrabble.prototype.score(highestWord);
    // return highScore;
    return highestWord
  }
};

var Scrabble = require("./scrabble") // do this here to pass in an instance of scrabble every time a player is created
var firstGame = new Player("Marisol", new Scrabble())

console.log(firstGame.play("apple"))
console.log(firstGame.play("zzzzzzz"))
console.log(firstGame.play("notebook"))
console.log(firstGame.play("google"))
console.log(firstGame.play("marisol"))


console.log(firstGame.totalScore())
console.log(firstGame.hasWon())

console.log(firstGame.plays)
console.log(firstGame.highScoringWord())
//console.log(firstGame.highestWordScore()) // could not get this to work because receiving error about changing case in scrabble file.

// module.exports = Player;
