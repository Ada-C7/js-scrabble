var Scrabble = require('./scrabble.js');

var Player = function(name) {
  this.name = name;
  this.plays = [];
};

Player.prototype = {
  play: function(word){
    if (this.totalScore >= 10){
      return false;
    }
    this.plays.push(word);
    return this.plays
  },

  totalScore: function(){
    var total = 0;

    for(var i = 0; i < this.plays.length; i++){
      wordScore = Scrabble.prototype.score(this.plays[i]);
      total += wordScore;
    }
    return total
  },

  hasWon: function(){
    if (this.totalScore >= 100){
      return true;

    }
  },

  highestScoringWord: function(){
    return Scrabble.prototype.highestScoreFrom(this.play);
  }
}; //closing prototype

var aPlayer = new Player("Lau");
var palabra = aPlayer.play("Lauraaaa");
var scoress = aPlayer.totalScore();
// var palabras = aPlayer.highestScoreFrom(["lau", " ", "peter", "jajajaaa", "hola"]);
console.log(palabra)

console.log(scoress)
