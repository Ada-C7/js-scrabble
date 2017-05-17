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
    // console.log(sortedWords);

    var size = sortedWords.length;

    if (sortedWords[size - 1] > sortedWords[size - 2]){
      return sortedWords[size - 1][0];
    }
  }
};

// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
// };

module.exports = Scrabble;

var newWord = new Scrabble();
// console.log(newWord.score('zebra'))

array = ["test", "zebra", "a", "big"];

newWord.highestScoreFrom(array);
