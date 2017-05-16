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
    var upcaseWord = word.toUpperCase();
    var letters = upcaseWord.split("");
    var score = 0;

    if (word.length == 7) {
      score =+ 50;
    }

    // maybe look into using find and map?
    letters.forEach (function(letter) {
      score += Number(this._tiles[letter]);
    }, this);
    return score;
};

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  // returns the word in the array with the highest score

  // if the top score is tied between multiple words, pick the one with the fewest letters
  // If the top score is tied between multiple words and one used all seven letters, choose the one with seven letters over the one with fewer tiles
  // If the there are multiple words that are the same score and same length, pick the first one in supplied list.
};
module.exports = Scrabble;

var scrabble = new Scrabble();
scrabble.score("ooooooo");
