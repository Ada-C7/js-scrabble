"use strict";

var Scrabble = function() {};

Scrabble.prototype = {
  score: function(word) {
    var scoreBoard = {
      "a": 1, "b": 3, "c": 3, "d": 2, "e": 1, "f": 4, "g": 2, "h": 4, "i": 1, "j": 8, "k": 5, "l": 1, "m": 3, "n": 1, "o": 1, "p": 3, "q": 10, "r": 1, "s": 1, "t": 1, "u": 1, "v": 4, "w": 4, "x": 8, "y": 4, "z": 10
    };
    var total = 0;
    for(var i = 0; i < word.length; i++) {
      total += scoreBoard[word.toLowerCase()[i]];
    }
    if(word.length == 7) {
      total += 50;
    }
    return total;
  },

  highestScoreFrom: function(words) {
    var maxWord = 0;
    var maxScore = 0;
    for(var i = 0; i < words.length; i++) {
      if(this.score(words[i]) > maxScore) {
        maxScore = this.score(words[i]);
        maxWord = words[i];
      }
      else if(this.score(words[i]) == maxScore) {
        if(maxWord.length == 7) {}
        else if(words[i].length == 7) {
          maxScore = this.score(words[i]);
          maxWord = words[i];
        }
        else if(words[i].length < maxWord.length) {
          maxScore = this.score(words[i]);
          maxWord = words[i];
        }
      }
    }
    return maxWord;
  }
};

var Player = function(name) {
  this.name = name;
  this.allPlays = [];
};

Player.prototype = {
  plays: function() {
    return this.allPlays;
  },

  play: function(word) {
    if(this.hasWon == true) {
      return false;
    }
    this.allPlays.push(word);
    return this.allPlays;
  },

  totalScore: function() {
    var sum = 0;
    var scrabble = new Scrabble();
    for(var i = 0; i < this.plays().length; i++) {
      sum += scrabble.score(this.plays()[i]);
    }
    return sum;
  },

  hasWon: function() {
    if(this.totalScore() > 100) {
      return true;
    } else {
      return false;
    }
  },

  highestScoringWord: function() {
    var scrabble = new Scrabble();
    scrabble.highestScoreFrom(this.allPlays());
  },

  highestWordScore: function() {
    var scrabble = new Scrabble();
    scrabble.score(this.highestScoringWord());
  },
};

module.exports = Scrabble;

// var testing = new Scrabble;
// console.log(testing.score("chicken"));

// var testingArrays = new Scrabble;
// console.log(testingArrays.highestScoreFrom(["so", "tins", "toes", "it", "to"]))

var testing = new Player("Ada");
console.log(testing.name);
console.log(testing.play("owl"));
console.log(testing.play("chicken"));
console.log(testing.play("hawk"));
console.log(testing.plays());
console.log(testing.totalScore());
console.log(testing.hasWon());
console.log(testing.);
