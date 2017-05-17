
const Scrabble = require('./scrabble.js');
var game = new Scrabble();

var Player = function(name){
  name: name
};

Player.prototype = {
  plays: [],

  play: function(word){
    if (this.hasWon()){
      return false;
    } else {
      this.plays.push(word);
    }
  },

  totalScore: function(){
    var playerScore = 0;

    this.plays.forEach( function(word){
      if (!isNaN(game.score(word))){
      playerScore += game.score(word);
      }
    })

    return playerScore
  },

  hasWon: function(){
    if (this.totalScore() >= 100){
      return true;
    } else {
      return false;
    }
  },

  highestScoringWord: function(){
      return  game.highestScoreFrom(this.plays);
  },

  highestWordScore: function(){
    return game.score(this.highestScoringWord());
  }
}

var mightyFluff = new Player('Tofu');

mightyFluff.play('fluffy');
mightyFluff.play('WordThatIsTooLong');
mightyFluff.play('AAAAAAA');
mightyFluff.play('TRUSTAL');
mightyFluff.play('Tofu');

console.log(mightyFluff.plays);
console.log(mightyFluff.totalScore());
console.log(mightyFluff.hasWon());
console.log(mightyFluff.highestScoringWord());
console.log(mightyFluff.highestWordScore());
