"use strict";
var Scrabble = function() {};

Scrabble.prototype = {
  scores: {
    "a": 1,
    "b": 3,
    "c": 3,
    "d": 2,
    "e": 1,
    "f": 4,
    "h": 4,
    "i": 1,
    "j": 8,
    "k": 5,
    "l": 1,
    "m": 3,
    "n": 1,
    "o": 1,
    "p": 3,
    "q": 10,
    "r": 1,
    "s": 1,
    "t": 1,
    "u": 1,
    "v": 4,
    "w": 4,
    "x": 8,
    "y": 4,
    "z": 10
  },
  score: function(word) {
    var sum = 0
    for(var i = 0; i < word.length; i++) {
      sum += this.scores[word[i].toLowerCase()];
    }
    if (word.length === 7) {
      sum += 50;
    }
    return sum;
  }
};

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  var highestScoreArray = [];
  var max_num = 0;

  arrayOfWords.forEach(function (word) {
    var placeholder = Scrabble.prototype.score(word);
    if (placeholder > max_num) {
      max_num = placeholder;
      highestScoreArray = [word];
    } else if (placeholder = max_num) {
      highestScoreArray.push(word);
    }
  });

  return Scrabble.prototype.tieBreaker(highestScoreArray);
};

Scrabble.prototype.tieBreaker = function(array) {
  var winner = array[0];
  var min_length = array[0].length;

  for(var i = 0; i < array.length; i++) {
    if (array[i].length == 7) {
      winner = array[i];
      break;
    } else if (array[i].length < array[i - 1]) {
      winner = array[i];
    }
  }

  return winner;
};


Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};


//
var scrab = new Scrabble;
var pizza = scrab.highestScoreFrom(["appleZZZ", "POTTtatd"]);

console.log(pizza);

module.exports = Scrabble;
