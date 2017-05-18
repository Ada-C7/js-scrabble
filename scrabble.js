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
  var wordscore = word.score + 50;
};
return wordscore;
}

ScrabbleGame.prototype.highestScoreFrom = function(wordsPlayed) {
  var highestScoringWord = ""
  var highestWordScore = 0
  for (var i = 0; i < wordsPlayed.length; i++) {
    if(score(wordsPlayed[i]) > highestWordScore) {
      highestWordScore = score(wordsPlayed[i])
      highestScoringWord = wordsPlayed[i]
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
//*****************************//PLAYER//**************************

var Player = function() {};

//the constructor initializes and instance of of the "class", constructor is called with new Player with the addition of 'instance' vars, unlike new scrabbleGame
var Player = function(name) {
  this.name = name;
  this.plays = [],
  this.won = false;
};

Player.prototype.play = function(word) {
  //should add the input word to the plays array
  this.plays.push(word);
};

Player.prototype.totalScore = function() {
  //should SUM and RETURN the score of the players words
  var totalScore = 0;
  var playscrabble = new ScrabbleGame();
  //iterate over plays
  this.plays.forEach(function(word)) {
    this.plays[i] += this.plays[i];
    Math.sum(this.plays[i]);
  }
  return totalScore;
};
}

Player.prototype.hasWon = function() {
  //should check if the player has 100 or more points and returns true or false
  if (this.totalScore() >= 100)
  this.won = true
  else {
    return this.won
  }
}

Player.prototype.highestScoringWord = function() {
  var playscrabble = new ScrabbleGame();
  return playscrabble.highestScoreFrom(this.plays);
}

Player.prototype.highestWordScore = function() {
  var highestWordScore = 0
  for (var i = 0; i < wordsPlayed.length; i++) {
    if(score(wordsPlayed[i]) > highestWordScore) {
      highestWordScore = score(wordsPlayed[i])
}
};
