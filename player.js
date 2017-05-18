var Scrabble = require('./scrabble');

// PLAYER Constructor
var Player = function(name) {
  this.name = name;
  this.plays = [];
  this.score = 0;
  this.won = false;
};

// PLAYER Prototype
Player.prototype = {
  //- function for Player to play(word)
  play: function(word) {
    this.plays.push(word);
    var single_score = Scrabble.prototype.scoreWord(word);
    this.score += single_score;
    return single_score;
  },

  //- function to return totalScore()
  totalScore: function() {
    return this.score;
  }, //function not necessary? .score does the same thing

  //- function to show win (T/F)
  hasWon: function() {
    if (this.score >= 100 ) { this.won = true; }
  },

  //- function to return highest WORD
  highestScoringWord: function() {
    var word = Scrabble.prototype.highestScoreWord(this.plays);
    return word;
  },

  //- function to return highest SCORE
  highestWordScore: function() {
    var max_score = Scrabble.prototype.maxScore(this.plays);
    return max_score;
  },
};

// print out single player data
var tamiko = new Player("Tamiko");

console.log(tamiko.name);
console.log(tamiko.play("zzz"));
console.log(tamiko.play("zzz"));
console.log(tamiko.play("zzza"));
console.log(tamiko.play("zzz"));
console.log(tamiko.totalScore());
console.log(tamiko.highestScoringWord());
console.log(tamiko.highestWordScore());
