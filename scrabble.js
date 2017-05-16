var Scrabble = function() {};

// YOUR CODE HERE

var pointValue = {
  'a': 1,
  'e': 1,
  'i': 1,
  'o': 1,
  'u': 1,
  'l': 1,
  'n': 1,
  'r': 1,
  's': 1,
  't': 1,
  'd': 2,
  'g': 2,
  'b': 3,
  'c': 3,
  'm': 3,
  'p': 3,
  'f': 4,
  'h': 4,
  'v': 4,
  'w': 4,
  'y': 4,
  'k': 5,
  'j': 8,
  'x': 8,
  'q': 10,
  'z': 10

};

var ScrabbleGame = function() {
  this.word = word;
  this.wordscore = wordscore;
  this.points = points;
};

var score = function(word) {
  var points = 0;
    for (var i = 0; i < word.length; i++) {
    points += pointValue[word[i]];
  }
  if (word.length > 6)
  wordscore = word.score + 50;
};
return word.score;
};


// YOUR CODE HERE
Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

module.exports = Scrabble;
