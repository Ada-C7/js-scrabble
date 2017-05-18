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
  //- function to show win (T/F)
  hasWon: function() {
    if (this.score >= 100 ) { this.won = true; }
    return this.won;
  },

  //- function for Player to play(word)
  play: function(word) {
    if (this.hasWon()) {
      return console.log("WIN!");
    } else {
      this.plays.push(word);
      var single_score = Scrabble.prototype.scoreWord(word);
      this.score += single_score;
      return single_score;
    }
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

/**********************END OF MODULES****************************/

// initiate new player
var tamiko = new Player("Tamiko");
console.log(tamiko.name);

// create plays by the player > 100 pts
console.log(tamiko.play("zzzz"));
console.log(tamiko.play("zzzz"));
console.log(tamiko.play("zzzza"));
console.log(tamiko.play("zzzz"));

console.log(tamiko.score);
console.log(tamiko.highestScoringWord());
console.log(tamiko.highestWordScore());
console.log(tamiko.won);
console.log(tamiko.plays);
