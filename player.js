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
    return Scrabble.prototype.highestScoreFrom(this.plays);
  }
}; //closing prototype

var aPlayer = new Player("Lau");
var palabra = aPlayer.play("Lauraaaa");
var palabra1 = aPlayer.play("Lauraa");
var palabra2 = aPlayer.play("qqq");
var palabra = aPlayer.play("Laqqq");



var scoress = aPlayer.totalScore();
var palabras = aPlayer.highestScoringWord();
// var palabras = aPlayer.highestScoringWord(["lau", " ", "peter", "jajajaaa", "hola"]);
console.log(palabras)

console.log(scoress)
