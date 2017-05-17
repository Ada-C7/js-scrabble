var Scrabble = function() {
  this._tiles = {
    "A": 1,
    "B": 3,
    "C": 3,
    "D": 2,
    "E": 1,
    "F": 4,
    "G": 2,
    "H": 4,
    "I": 1,
    "J": 8,
    "K": 5,
    "L": 1,
    "M": 3,
    "N": 1,
    "O": 1,
    "P": 3,
    "Q": 10,
    "R": 1,
    "S": 1,
    "T": 1,
    "U": 1,
    "V": 4,
    "W": 4,
    "X": 8,
    "Y": 4,
    "Z": 10
  };
};

// YOUR CODE HERE
Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

// work should be case insensitive
Scrabble.prototype.score = function(word) {
    word = word.toUpperCase();
    var score = 0;

    if (word.length == 7) {
      score =+ 50;
    }

    for (i = 0; i < word.length; i++) {
      score += this._tiles[word[i]];
    }
    return score;
};

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {

  var scoringOfWords = arrayOfWords.map(function(scoredWord) {
    var word = {};
    word.word = scoredWord;
    word.score = this.score(scoredWord);
    return word;
  }, this);

  var maxValue = Math.max.apply(Math, scoringOfWords.map(function(o) {
      return o.score;
  }));

  var winningWords = [];
  scoringOfWords.forEach (function(word) {
    if (word.score == maxValue) {
      winningWords.push(word.word);
    }
  });

  if (winningWords.length == 1) {
    return winningWords[0];
  } else {

  }





  console.log(scoringOfWords);
  console.log(maxValue);
  console.log(winningWords);

  // if the top score is tied between multiple words, pick the one with the fewest letters
  // If the top score is tied between multiple words and one used all seven letters, choose the one with seven letters over the one with fewer tiles
  // If the there are multiple words that are the same score and same length, pick the first one in supplied list.
};
module.exports = Scrabble;

var scrabble = new Scrabble();
console.log(scrabble.score("eeeee"));

var words = ["aaaa", "bbbbb", "eeeeeee"];
scrabble.highestScoreFrom(words);
