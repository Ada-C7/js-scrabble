var shuffle = function(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};

var TileBag = function() {
  this.tilesPerBag = shuffle(["a", "a", "a", "a", "a", "a", "a", "a", "a", "b", "b", "c", "c", "d", "d", "d", "d", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "f", "f", "g", "g", "g", "h", "h", "i", "i", "i", "i", "i", "i", "i", "i", "i", "j", "k", "l", "l", "l", "l", "m", "m", "n", "n", "n", "n", "n", "n", "o", "o", "o", "o", "o", "o", "o", "o", "p", "p", "q", "r", "r", "r", "r", "r", "r", "s", "s", "s", "s", "t", "t", "t", "t", "t", "t", "u", "u", "u", "u", "v", "v", "w", "w", "x", "y", "y", "z"]);
};

TileBag.prototype = {
  drawTiles: function(numberOfTiles) {
    var tiles = [];
    for (var i = 0; i < numberOfTiles; i++) {
      if (this.remainingTiles() > 0) {
        tiles.push(this.tilesPerBag.pop());
      }
    }
  },
  remainingTiles: function() {
    return this.tilesPerBag.length;
  }
};

var Scrabble = function() {
  this.scoreChart = {
    "a": 1,
    "b": 3,
    "c": 3,
    "d": 2,
    "e": 1,
    "f": 4,
    "g": 2,
    "h": 4,
    "i": 1,
    "j": 8,
    "k": 5,
    "l": 1,
    "m": 3,
    "n": 1,
    "o": 1,
    "p": 3,
    "q": 10,
    "r": 1,
    "s": 1,
    "t": 1,
    "u": 1,
    "v": 4,
    "w": 4,
    "x": 8,
    "y": 4,
    "z": 10
  };
  this.tileBage = new TileBag();
};

Scrabble.prototype = {
  score: function(word) {
    var letters = word.toLowerCase().split(''),
    wordScore = 0;
    letters.forEach(function(letter) {
      wordScore += this.scoreChart[letter];
    }, this);
    if (word.length == 7) {
      wordScore += 50;
    }
    return wordScore;
  },
  highestScoreFrom: function(arrayOfWords) {
    // make an arrayOfScores from the given arrayOfWords
    var arrayOfScores = [];
    arrayOfWords.forEach(function(word) {
      arrayOfScores.push(this.score(word));
    }, this);

    // remove all non-max words from the arrayOfWords
    var max = Math.max.apply(null, arrayOfScores),
    winningWords = [],
    index = 0;
    arrayOfScores.forEach(function(score) {
      if (score == max) {
        winningWords.push(arrayOfWords[index]);
      }
      index++;
    });

    // winningWords now only contains one or more words with max score
    var maxScoreWord = winningWords[0];
    if (winningWords.length == 1) {
      return maxScoreWord;
    } else {
      winningWords.forEach(function(word) {
        if (word.legnth == 7) {
          return word;
        } else if (maxScoreWord.legnth > word){
          maxScoreWord = word;
        }
      });
    }
    return maxScoreWord;
  }
};

var Player = function(name, game) {
  this.name = name;
  this.plays = [];
  this.game = game;
};

Player.prototype = {
  play: function(word) {
    if (this.hasWon()) {
      return false;
    } else {
      this.plays.push(word);
    }
  },
  totalScore: function() {
    var total = 0;
    this.plays.forEach(function(word) {
      total += this.game.score(word);
    }, this);
    return total;
  },
  hasWon: function() {
    if (this.totalScore() > 100) {
      return true;
    } else {
      return false;
    }
  },
  highestScoringWord: function() {
    return this.game.highestScoreFrom(this.plays);
  },
  highestWordScore: function() {
    return this.game.score(this.highestScoringWord());
  }
};

var Dictionary = function() {
  this.miniDict = ["hi", "potato", "radish", "queen", "bye"];
};

Dictionary.prototype = {
  isValidWord: function(word) {
    return this.miniDict.includes(word);
  }
};






// Testing Codes
var newGame = new Scrabble();
var playerOne = new Player("InfectedSnarling", newGame);
playerOne.play("hi");
playerOne.play("potato");
playerOne.play("radish");
playerOne.play("queen");
playerOne.play("bye");
console.log(playerOne.totalScore());
console.log(playerOne.hasWon());
console.log(playerOne.highestScoringWord());
console.log(playerOne.highestWordScore());
console.log(playerOne.plays);



module.exports = Scrabble;
