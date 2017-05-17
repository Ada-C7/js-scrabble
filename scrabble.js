// constructor: like initialize - handles the things specific to an instance
// prototype: holds information that is needed for all instances (score hash)

const SCORECHART = {
  "A": 1, "E": 1, "I": 1, "O": 1, "U": 1, "L": 1, "N": 1, "R": 1, "S": 1, "T": 1, "D": 2, "G": 2,
  "B": 3, "C": 3, "M": 3, "P": 3, "F": 4, "H": 4, "V": 4, "W": 4, "Y": 4, "K": 5, "J": 8, "X": 8,
  "Q": 10, "Z": 10
};

// constructor
var Scrabble = function() {

};

// prototypes

// example prototype
Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

Scrabble.prototype.score = function(word) {

  // make word into an array
  var wordArray = word.toUpperCase().split("");
  var wordScore = 0;
  for (var i = 0; i < word.length; i += 1) {
    letter = wordArray[i];
    wordScore += SCORECHART[letter];
  }
  return wordScore;
};


module.exports = Scrabble;

var game = new Scrabble();
console.log(game.helloWorld());
console.log(game.score("hello"));
