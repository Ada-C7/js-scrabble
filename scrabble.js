var Scrabble = function() {};

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

//my initializer
//the constructor initializes and instance of of the "class", constructor is called with new ScrabbleGame, but without 'instance vars'
var ScrabbleGame = function() {
};
// setting up the structure of scoring on any word
ScrabbleGame.prototype.score = function(word) {
  var points = 0;
    for (var i = 0; i < word.length; i++) {
    points += pointValue[word[i]];
  }
  if (word.length > 6)
  wordscore = word.score + 50;
};
return word.score;
}

var highestScoreFrom = function(wordsPlayed) {
  var highestScoringWord = ""
      highestWordscore = 0
  for (var i = 0; i < wordsPlayed.length; i++) {
    if(score(word) > highestWordscore) {
      highestWordscore = word;
      highest = score(word);
    }
  }
  return highestScoringWord
}

var playscrabble = new ScrabbleGame();
playscrabble.score(word)

// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
// };

module.exports = Scrabble;
