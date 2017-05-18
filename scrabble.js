var shuffle = function(array) {
  var lengthOfArray = array.length, currentElement, randomIndex;
  while (lengthOfArray) {
    randomIndex = Math.floor(Math.random() * lengthOfArray--);
    // And swap it with the current element.
    currentElement = array[lengthOfArray];
    array[lengthOfArray] = array[randomIndex];
    array[randomIndex] = currentElement;
  }
  return array;
};

var TileBag = function() {
  this.tilesPerBag = shuffle(["a", "a", "a", "a", "a", "a", "a", "a", "a", "b", "b", "c", "c", "d", "d", "d", "d", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "e", "f", "f", "g", "g", "g", "h", "h", "i", "i", "i", "i", "i", "i", "i", "i", "i", "j", "k", "l", "l", "l", "l", "m", "m", "n", "n", "n", "n", "n", "n", "o", "o", "o", "o", "o", "o", "o", "o", "p", "p", "q", "r", "r", "r", "r", "r", "r", "s", "s", "s", "s", "t", "t", "t", "t", "t", "t", "u", "u", "u", "u", "v", "v", "w", "w", "x", "y", "y", "z"]);
};

TileBag.prototype = {
  remainingTiles: function() {
    return this.tilesPerBag.length;
  },
  drawTiles: function(numberOfTiles) {
    var tiles = [];
    for (var i = 0; i < numberOfTiles; i++) {
      if (this.remainingTiles() > 0) {
        tiles.push(this.tilesPerBag.pop());
      }
    }
    return tiles;
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
  this.tileBag = new TileBag();
  this.dictionary = new Dictionary();
};

Scrabble.prototype = {
  score: function(word = "") {
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

    // add all max scoring words from the arrayOfWords to the winningWords
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
  this.tileHolder = [];
};

Player.prototype = {
  draw: function() {
    this.tileHolder = this.tileHolder.concat(this.game.tileBag.drawTiles(7 - this.tileHolder.length));
    console.log(this.tileHolder);
  },
  play: function(word) {
    if (this.hasWon()) {
      console.log(this.name + " can't play the word '" + word + "': You have already won this game!");
      return false;
    } else {
      if (this.game.dictionary.isValidWord(word)) {
        for (var i = 0; i < word.length; i++) {
          var index = this.tileHolder.indexOf(word[i]);
          if (index > -1) {
            this.tileHolder.splice(index, 1);
          } else {
            console.log(this.name + " can't play the word '" + word + "': You do not have the tiles needed!");
            return false;
          }
        }
        console.log(this.name + " played the word '" + word + "'");
        this.plays.push(word);
        this.draw();
      } else {
        console.log(this.name + " can't play the word '" + word + "': Not a valid word in the game dictionary!");
        return false;
      }
    }
  },
  hasLetters: function(word) {
    var result = true;
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
  this.miniDict = ["e", "ai", "potato", "radish", "queen", "bye", 'hike', "rusty", "brined", "greater"];
};

Dictionary.prototype = {
  isValidWord: function(word) {
    return this.miniDict.includes(word);
  }
};

// Test codes
var newGame = new Scrabble();
var playerOne = new Player("InfectedSnarling", newGame);
playerOne.draw();
playerOne.play("e");
playerOne.play("potato");
playerOne.play("radish");
playerOne.play("queen");
playerOne.play("bye");
console.log(playerOne.totalScore());
console.log(playerOne.hasWon());
console.log(playerOne.highestScoringWord());
console.log(playerOne.highestWordScore());
console.log(playerOne.plays);

var playerTwo = new Player("Coral", newGame);
playerTwo.tileHolder = ["g", "r", "e", "a", "t", "e", "r"];
playerTwo.draw();
playerTwo.play("greater");
playerTwo.play("e");
playerTwo.play("badmove");
console.log(playerTwo.totalScore());
console.log(playerTwo.hasWon());
console.log(playerTwo.highestScoringWord());
console.log(playerTwo.highestWordScore());
console.log(playerTwo.plays);


module.exports = Scrabble;
