var Scrabble = function () {};

Scrabble.prototype = {
  score: function (word) {
    var i = 0;
    var total = 0;
    while (i < word.length) {
      var letter = word[i].toLowerCase();
      if (letter.match(/[a|e|i|o|u|l|n|r|s|t]/i)) {
        total = total + 1;
        i++;
      } else if (letter.match(/[d|g]/i)) {
        total = total + 2;
        i++;
      } else if (letter.match(/[b|c|m|p]/i)) {
        total = total + 3;
        i++;
      } else if (letter.match(/[f|h|v|w|y]/i)) {
        total = total + 4;
        i++;
      } else if (letter.match(/[k]/i)) {
        total = total + 5;
        i++;
      } else if (letter.match(/[j|x]/i)) {
        total = total + 8;
        i++;
      } else if (letter.match(/[q|z]/i)) {
        total = total + 10;
        i++;
      } else {
        return console.log("Invalid word.");
      }
    }

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
