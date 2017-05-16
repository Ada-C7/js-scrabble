var Scrabble = function() {};

Scrabble.prototype.score = function(word) {
  var total = 0;
  var lookup = {
    A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
    D: 2, G: 2,
    B: 3, C: 3, M: 3, P: 3,
    F: 4, H: 4, V: 4, W: 4, Y: 4,
    K: 5,
    J: 8, X: 8,
    Q: 10, Z: 10
  }
  word = word.toUpperCase();
  for (var i = 0; i < word.length; i++) {
    score = lookup[word[i]];
    total += score;
  }

  return total;
};

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  //call score function on each word in arrayOfWords
  var scores = [];
  var self = this;

  arrayOfWords.forEach(function(word) {
    currentScore = self.score(word);
    scores.push(currentScore);
  });

  //get index of maximum value in scores array and return corresponding word
  var index = scores.indexOf(Math.max(...scores));
  return arrayOfWords[index];


  // if more than one word with max score
  // seven letter word wins
  // else word with smallest length
  // if more than one word with smallest length, return first in list

};

module.exports = Scrabble;

var scrab = new Scrabble;
console.log(scrab.score('tubrun'));
console.log(scrab.score('heffalump'));
console.log(scrab.score('qifanxi'));
console.log(scrab.highestScoreFrom(['tubrun', 'heffalump', 'qifanxi']));
