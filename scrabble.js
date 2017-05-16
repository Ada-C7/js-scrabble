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

module.exports = Scrabble;

var scrab = new Scrabble;
// console.log(scrab.helloWorld());
console.log(scrab.score('tubrun'));
console.log(scrab.score('heffalump'));
console.log(scrab.score('qifanxi'));
