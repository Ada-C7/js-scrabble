var Scrabble = function() {
  tile_scores = {
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

Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

Scrabble.prototype.scoreWord = function(word) {
  var score = 0
  var word_length = word.length

  for(var i = 0; i < word_length; i++)
    score += tile_scores[word.charAt(i)];

  if (word_length == 7) {
    score += 50;
  }
  // return score
  console.log(score)
};


var gameOne = new Scrabble
gameOne.scoreWord("jazzily")
console.log(gameOne)

module.exports = Scrabble;
