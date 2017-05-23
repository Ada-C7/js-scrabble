var Scrabble = function () {};

Scrabble.prototype = {
  score: function (word) {

    wordArray = word.split("");

    var total = wordArray.reduce(function(acc, letter) {

      if (letter.match(/[a|e|i|o|u|l|n|r|s|t]/)) {
        return acc + 1;
      } else if (letter.match(/[d|g]/)) {
        return acc + 2;
      } else if (letter.match(/[b|c|m|p]/)) {
        return acc + 3;
      } else if (letter.match(/[f|h|v|w|y]/)) {
        return acc + 4;
      } else if (letter.match(/[k]/)) {
        return acc + 5;
      } else if (letter.match(/[j|x]/)) {
        return acc + 8;
      } else if (letter.match(/[q|z]/)) {
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

    var wordInfo = arrayOfWords.map(function(word) {
      return [word, this.score(word)];
    }.bind(this));

    // Rules: If the top score is tied between multiple words,
    // pick the one with the fewest letters.
    // If the top score is tied between multiple words, pick
    // the one with the fewest letters.
    // If the there are multiple words that are the same score
    // and same length, pick the first one in supplied list.

    var highestScoringWord = wordInfo.reduce(function(bestWordSoFar, currentWord) {

      if (currentWord[1] > bestWordSoFar[1]) {
        return currentWord;
      }
      if (currentWord[0].length === 7 && bestWordSoFar[0].length < 7) {
        if (currentWord[1] === bestWordSoFar[1]) {
          return currentWord;
        }
      }
      return bestWordSoFar;
    });
    return highestScoringWord[0];
  }
};

module.exports = Scrabble;
