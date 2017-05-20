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

    arrayOfWords.forEach(function(word) {
      wordInfo.push([word, this.score(word)]);
    }.bind(this));

    sortedWords = wordInfo.sort(function(scoreOne, scoreTwo) {
      return scoreOne[1] - scoreTwo[1];
    });

    var highestWord = sortedWords.reduce(function(acc, pair) {
      if (pair[1] > acc[1] || (pair[1] >= acc[1] && pair[0].length == 7)) {
        return pair;
      }
      return acc;
    }, ["", 0]);
    return highestWord;
  }
};

module.exports = Scrabble;

var newStuff = new Scrabble();

// array = ["word", "stuff", "things"];
array = ["eeeeeee", "zzzzzj", "aaaaaga"];
// array = ["a", "i", "o"];

// console.log(newStuff.score("word"));

console.log(newStuff.score("aaaaaga"));
console.log(newStuff.score("zzzzzj"));

console.log(newStuff.highestScoreFrom(array));
