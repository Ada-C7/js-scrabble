var Scrabble = function () {};

Scrabble.prototype = {
  score: function (word) {
    wordArray = word.split("");

    var total = wordArray.reduce(function(acc, letter) {

      if (letter.match(/[a|e|i|o|u|l|n|r|s|t]/i)) {
        return acc + 1;
      } else if (letter.match(/[d|g]/i)) {
        return acc + 2;
      } else if (letter.match(/[b|c|m|p]/i)) {
        return acc + 3;
      } else if (letter.match(/[f|h|v|w|y]/i)) {
        return acc + 4;
      } else if (letter.match(/[k]/i)) {
        return acc + 5;
      } else if (letter.match(/[j|x]/i)) {
        return acc + 8;
      } else if (letter.match(/[q|z]/i)) {
        return acc + 10;
      } else {
        throw new Error("Invalid word.");
      }
    }, 0);

    if (word.length === 7) {
      total += 50;
    }
    return total;
  },

  highestScoreFrom: function(arrayOfWords) {
    var wordInfo = [];
    var self = this;

    arrayOfWords.forEach(function(word) {
      wordInfo.push([word, self.score(word)]);
    });

    sortedWords = wordInfo.sort(function(scoreOne, scoreTwo) {
      return scoreOne[1] - scoreTwo[1];
    });


    var size = sortedWords.length;
    var lastPair = sortedWords[size - 1];

    if (lastPair[1] > sortedWords[size - 2]){
      return lastPair[0];
    } else {

      var highestWords = [];

      sortedWords.forEach(function(element) {
        if (lastPair[1] === element[1]) {
          highestWords.push([element[0], element[0].length]);
        }
      });

      var smallestWordPosition = 0;
      var smallestWordLength = 0;

      highestWords.forEach(function(element) {
        if (element[1] === 7) {
          return element[0];
        } else if (element[1] < smallestWordLength) {
          smallestWordPosition = highestWords.indexOf(element);
        }
      });
      return highestWords[0][smallestWordPosition];
    }
  }
};

module.exports = Scrabble;

var newStuff = new Scrabble();

array = ["word", "srtuff","things"];

newStuff.highestScoreFrom(array);
