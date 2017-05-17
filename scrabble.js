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

module.exports = Scrabble;

// var testing = new Scrabble;
// console.log(testing.score("chicken"));

// var testingArrays = new Scrabble;
// console.log(testingArrays.highestScoreFrom(["so", "tins", "toes", "it", "to"]))
