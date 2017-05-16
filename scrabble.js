var Scrabble = function() {
  this._scoreChart = {
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
};

Scrabble.prototype = {
  score: function(word) {
    var letters = word.toLowerCase().split(''),
        wordScore = 0;
    letters.forEach(function(letter) {
      wordScore += this._scoreChart[letter];
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
        index = 0;
    arrayOfScores.forEach(function(score) {
      if (score < max) {
        arrayOfWords.splice(index, 1);
      } else {
        index++;
      }
    });

    // arrayOfWords now only contains one or more words with max score
    var maxScoreWord = arrayOfWords[0];
    if (arrayOfWords.length == 1) {
      return maxScoreWord;
    } else {
      arrayOfWords.forEach(function(word) {
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

var gameOne = new Scrabble();
console.log(gameOne.score("testing"));
console.log(gameOne.score("queting"));
console.log(gameOne.score("iiiiiii"));
console.log(gameOne.highestScoreFrom(["melons", "clammy", "quest"]));
console.log(gameOne.highestScoreFrom(["jam", "uzi", "zimmq"]));
console.log(gameOne.highestScoreFrom(["quested", "uzi", "iiiiiii"]));

var Player = function(name) {
  this._name = name;
  this._plays = [];
  this._game = new Scrabble();
};

Player.prototype = {
  play: function(word) {
    if (this.hasWon) {
      return false;
    } else {
      this._plays.push(word);
    }
  },
  totalScore: function() {
    var total = 0;
    this._plays.forEach(function(word) {
      total += this._game.score(word);
    }, this);
    return total;
  },
  hasWon: function() {
    if (this.totalScore > 100) {
      return true;
    } else {
      return false;
    }
  },
  highestScoringWord: function() {
    return this._game.highestScoreFrom(this._plays);
  },
  highestWordScore: function() {
    return this._game.score(this.highestScoringWord);
  }
};



















module.exports = Scrabble;
