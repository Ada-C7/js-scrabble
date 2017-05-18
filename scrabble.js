var Scrabble = function() {
  this.letterValues = { "a": 1, "b": 3, "c": 3, "d": 2, "e": 1, "f": 4, "g": 2, "h": 4, "i": 1, "j": 8, "k": 5, "l": 1, "m": 3, "n": 1, "o": 1, "p": 3, "q": 10, "r": 1, "s": 1, "t": 1, "u": 1, "v": 4, "w": 4, "x": 8, "y": 4, "z": 10
  };
  this.tilebag = new Tilebag();
  this.dictionary = new Dictionary();
};

// also works: define Scrabble.score, etc
// then call Scrabble.score in Player

Scrabble.prototype = {
  score: function(word) {
    // regex, raise errors
    if (/^[a-zA-Z]+$/.test(word)) {

      // case insensitive
      var word = word.toLowerCase();

      // 7 letter word bonus
      var wordScore = (word.length == 7) ? 50 : 0;

      // isolate letters
      for (var i = 0; i < word.length; i++) {
        // assign scores to letters
        wordScore += this.letterValues[word.charAt(i)];
      }

      // return total score
      return wordScore;

    } else {
      throw "Sorry, invalid input!";
    }
  },

  // highestScoreFrom(arrayOfWords): returns the word in the array with the highest score.
  highestScoreFrom: function(arrayOfWords) {
    if (Array.isArray(arrayOfWords)) {
      var highestScore = 0,
      winner;

      // iterate through words array
      arrayOfWords.forEach (function(word) {
        wordScore = this.score(word);
        if (wordScore > highestScore) {
          highestScore = wordScore;
          winner = word;
        } else if (wordScore == highestScore) {
          winner = this.tieBreaker(word, winner);
        }
      }, this);

      return winner;
    } else {
      throw "Sorry, invalid input! Please enter an array of words.";
    }
  },
  tieBreaker: function(contender, champ) {
    // seven letter words get 50 points, if tied for top score, winner is 7 letter word (over shorter)
    if (champ.length == 7 || contender.length == 7) {
      tieWinner = champ.length <= contender.length ? contender : champ;

      // if tied for top score, champ is shortest length
    } else {
      tieWinner = champ.length <= contender.length ? champ : contender;
    }
    return tieWinner;
  }
  // if multiple ties of same length, winner is first word
};


var Player = function(name, game) {
  this.name = name;
  this.plays = [];
  this.game = game;
};

Player.prototype = {
  play: function(word) {
    // Returns false if player has already won
    if (this.hasWon === true) {
      return false;

      // Function which adds the input word to the plays Array
    } else {
      this.plays.push(word);
    }
  },
  totalScore: function() {
    // Function which sums up and returns the score of the players words
    // iterate through plays
    var total = 0;
    this.plays.forEach (function(word) {

      // score each word and add to total
      total += this.game.score(word);
    }, this);

    // return total score
    return total;
  },
  hasWon: function() {
    // Function which returns true if the player has over 100 points, otherwise returns false
    var won = (this.totalScore() > 100) ? true : false;
    return won;
  },
  highestScoringWord: function() {
    // Function which returns the highest scoring word the user has played
    return this.game.highestScoreFrom(this.plays);
  },
  highestWordScore: function() {
    // Function which returns the highestScoringWord score
    var winner = this.highestScoringWord();
    return this.game.score(winner);
  }
};

// optional
var Tilebag = function() {
  this.fillBag = function() {
    var letterQuantities = { "a": 9, "b": 2, "c": 2, "d": 4, "e": 12, "f": 2, "g": 3, "h": 2, "i": 9, "j": 1, "k": 1, "l": 4, "m": 2, "n": 6, "o": 8, "p": 2, "q": 1, "r": 6, "s": 4, "t": 6, "u": 4, "v": 2, "w": 2, "x": 1, "y": 2, "z": 1
    },
    bag = [];
    for (var letter in letterQuantities) {
      for (var i = 0; i < letterQuantities[letter]; i++) {
        bag.push(letter);
      }
    }
  return bag;
  };
  this.bag = this.fillBag();
};

Tilebag.prototype = {
  drawTile: function(num) {
    hand = [];
    for (var i = 0; i < num; i++) {
      rand = Math.floor(Math.random() * this.bag.length);
      hand.push(this.bag[rand]);
      this.bag.splice(rand, 1);
    }
    return hand;
  }
};

// var Dictionary = function() {
//   this.allWords = ;
// };
//
// Dictionary.prototype = {
//   validWord: function(num) {
//   }
// };

// tests
var myScrabble = new Scrabble();

console.log("Scrabble test results");
console.log("~~~~~~~~~~~~~~~~~~~~~~");
console.log(myScrabble.score("ZZzzZZ")); // 60
console.log(myScrabble.score("niiice")); // 8
console.log(myScrabble.score("aaaAaaa")); // 57
// console.log(myScrabble.score(456)); // throw exception

console.log(myScrabble.highestScoreFrom(["ZZzzZZ", "niiice", "cute"])); // "ZZzzZZ"
console.log(myScrabble.highestScoreFrom(["gg", "aaaa", "b"])); // "gg"
console.log(myScrabble.highestScoreFrom(["c", "m", "da", "b"])); // "c"
console.log(myScrabble.highestScoreFrom(["zzzzzJ", "m", "da", "daaaaaA"])); // "daaaaaA"
// console.log(myScrabble.tilebag.bag); // array of letters
console.log(myScrabble.tilebag.drawTile(10)); // 10 random letters
// console.log(myScrabble.tilebag.bag); // returns array w 10 fewer letters
// console.log(myScrabble.highestScoreFrom(["niiice", ":)"])); // throw exception

var me = new Player("brenna", myScrabble);

console.log("Player test results");
console.log("~~~~~~~~~~~~~~~~~~~~~~");
me.play("rad");
console.log(me.hasWon()); // false
console.log(me.totalScore()); // 4
me.play("qqqqqqqqq");
console.log(me.totalScore()); // 94
me.play("QT");
console.log(me.totalScore()); // 105
console.log(me.hasWon()); // true
console.log(me.highestScoringWord()); // "qqqqqqqqq"
console.log(me.highestWordScore()); // 90

module.exports = Scrabble;
