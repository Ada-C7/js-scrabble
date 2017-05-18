var Scrabble = function() {};

// YOUR CODE HERE
// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
// };



Scrabble.prototype = {
  tiles: {A:1, B:3, C:3, D:2, E:1, F:4, G: 2, H:4, I:1, J:8, K:5, L:1, M:3, N:1, O: 1, P:3, Q:10, R:1, S:1, T:1, U: 1, V:4, W:4, X:8, Y:4, Z:10},
  score: function(word) {
    var wordForSplit = word.toUpperCase()
    var letters = [];
    var wordScore = 0;
    letters = wordForSplit.split("");
    if (letters.length == 7) {
      wordScore += 50;
    }
    for (var i = 0; i < letters.length; i++) {
      var tile = letters[i];
      var score = this.tiles[tile];
      wordScore += score;
    }
    return wordScore;
  },
  highestScoreFrom: function(arrayOfWords) {
    var winnerScore = 0;
    var tieWordScore = 0;
    var runnerUpScore = 0;
    var winner = "";
    var tieWord = ""
    var runnerUp = "";
    // collection of words that are the highest
    var self = this;
    arrayOfWords.forEach(function(word) {
        var wordScore = self.score(word);
        if ((wordScore > winnerScore) && (winner.length !== 7)) {
          winner = word;
          winnerScore = wordScore;
        } else if ((wordScore === winnerScore) && (word.length === 7) && (tieWord.length !== 7)) {
          tieWord = word;
          tieWordScore = wordScore;
          runnerUp = word;
          runnerUpScore = wordScore;
        } else if ((wordScore === winnerScore) && (word.length < winner.length) && (winner.length !== 7)) {
          tieWord = winner;
          winner = word;
          winnerScore = wordScore;
        } else if (wordScore > runnerUpScore) {
          runnerUp = word;
          runnerUpScore = wordScore;
        }
    });
    // console.log("Winning word: " + winner);
    // console.log("Runner Up Word: " + runnerUp);
    // console.log("Tie Word: " + tieWord);
    return winner;

  },
};

var test = new Scrabble;
var array = ["at", "aaaaaah",  "aaaaaaf", "qqqqqq", "happy", "aaaaaav",];
winner = test.highestScoreFrom(array);

console.log("Winning word is: " + winner);

module.exports = Scrabble;
