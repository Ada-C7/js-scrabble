var Scrabble = require("./scrabble");


var Player = function(name) {
  this.name = name;
  this.plays = [];
  this.scrabble = new Scrabble();
};

Player.prototype = {
  play: function(word) {
    // ADD BOOL LOGIC FROM hasWon()
    this.plays.push(word);
    return this.plays;
  },

  totalScore: function() {
    // var wordScore = 0;
    // var total = 0;
    //
    // this.play("word");
    // //this.plays is undefined
    // this.plays.forEach(function(word){
    //   console.log(this.plays);
    //   // score = this.scrabble.score(word);
    //   wordScore = this.scrabble.score(word);
    //   total += wordScore;
    // });
    // return total;
  },

  hasWon: function() {

  },

  highestScoringWord: function() {

  },

  highestWordScore: function() {
    
  }
};

player1 = new Player("Kerry");
player1.play("word");
// player1.totalScore();

// array = ["word", "dog"];
