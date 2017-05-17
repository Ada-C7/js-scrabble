
const SCORECHART = {
  "A": 1, "E": 1, "I": 1, "O": 1, "U": 1, "L": 1, "N": 1, "R": 1, "S": 1, "T": 1, "D": 2, "G": 2,
  "B": 3, "C": 3, "M": 3, "P": 3, "F": 4, "H": 4, "V": 4, "W": 4, "Y": 4, "K": 5, "J": 8, "X": 8,
  "Q": 10, "Z": 10
};

var Scrabble = function() {
};

Scrabble.prototype.wordScore = function(word) {
  var wordArray = word.toUpperCase().split("");
  var wordScore = 0;
  for (var i = 0; i < wordArray.length; i++) {
    letter = wordArray[i];
    wordScore += SCORECHART[letter];
  }
  if (wordArray.length == 7) {
    wordScore += 50;
  }
  return wordScore;
};

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  var self = this;
  var scoreHash = {};
  var arrayOfWords = arrayOfWords;
  var singleWordScore = 0;
  var max_score = 0;
  var max_word = 0;
  for (var i = 0; i < arrayOfWords.length; i++) {
    singleWordScore = self.wordScore(arrayOfWords[i]);
    scoreHash[arrayOfWords[i]] = singleWordScore;
  }
  for (var key in scoreHash) {
    if (scoreHash[key] > max_score) {
      max_score = scoreHash[key];
      max_word = key;
    } else if (scoreHash[key] == max_score && key.length == 7 && max_word.length != 7) {
      max_word = key;
    } else if (scoreHash[key] == max_score && key.length < max_word.length && max_word.length != 7) {
      max_word = key;
    }
  }
  return max_word;
};

module.exports = Scrabble;

var play = new Scrabble;
console.log(play.highestScoreFrom(["Hello","J", "AAAAAAD", "AAAAAAG", "HELLOQQQQQ", "ZZZZZZ"]));
