var Scrabble = function() {
  var tile_scores = {
    "a": 1,
    "e": 1,
    "i": 1,
    "o": 1,
    "u": 1,
    "l": 1,
    "n": 1,
    "r": 1,
    "s": 1,
    "t": 1,
    "d": 2,
    "g": 2,
    "b": 3,
    "c": 3,
    "m": 3,
    "p": 3,
    "f": 4,
    "h": 4,
    "v": 4,
    "w": 4,
    "y": 4,
    "k": 5,
    "j": 8,
    "x": 8,
    "q": 10,
    "z": 10,
  }

};


// returns the total score value for the given word. The word is input as a string (case insensitive). The chart below shows the point value for a given letter.


// YOUR CODE HERE
Scrabble.prototype.helloWorld = {
  test: function() {
    return 'hello world!';
  }
};

Scrabble.prototype.score = {
  score: function(word) {
  var score = 0

  if (word.length == 7) {
    score += 50
  }
};




module.exports = Scrabble;
