var Scrabble = require('./scrabble');
var S = new Scrabble;

var Player = function(name) {
  this.name = name;
  this.plays = [];
};

// YOUR CODE HERE

Player.prototype = {
  play: function(word) {
    if (this.hasWon()) {
      return false;
    } else {      //this keeps you from playing a word more than once - not a required rule (!this.plays.includes(word)) {
      this.plays.push(word);
    };
  },

  totalScore: function() {
    var totalScore = 0;
    this.plays.forEach(function (word) {
      totalScore += S.score(word);
    });
      return totalScore;
  },

  hasWon: function() {
    if (player.totalScore >= 100) {
      return true;
    } else {
      return false;
    }
  },

  highestScoringWord: function() {
    var highest = S.highestScoreFrom(this.plays);
    return highest;
  },

  highestWordScore: function() {
    var topWord = player.highestScoringWord();
    var topScore = S.score(topWord);
    return topScore;
  }
};


// manual test code I wrote to see results
var player = new Player("Elizabeth");
console.log("Name: " + player.name + ". Words played so far: ");
console.log(player.plays);
player.play("word");
player.play("happy");
player.play("happy");
player.play("aaaaaaa");
console.log(player.plays);
console.log(player.totalScore());
console.log(player.highestScoringWord());
console.log(player.highestWordScore());
