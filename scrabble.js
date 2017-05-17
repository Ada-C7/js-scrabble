var Scrabble = function() {
  this.letterValues = {
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
  tieBreaker: function(word, winner) {
    // seven letter words get 50 points, if tied for top score, winner is 7 letter word (over shorter)
    if (winner.length == 7 || word.length == 7) {
      tieWinner = winner.length <= word.length ? word : winner;

      // if tied for top score, winner is shortest length
    } else {
      tieWinner = word.length <= winner.length ? winner : word;
    }
    return winner;
  }
  // if multiple ties of same length, winner is first word
};


var Player = function(name) {
  this.name = name;
  this.plays = [];
};

Player.prototype = {
  play = function(word) {
    // Function which adds the input word to the plays Array
    // Returns false if player has already won
  },
  totalScore = function() {
    // Function which sums up and returns the score of the players words
  },
  hasScore = function() {
    // Function which returns true if the player has over 100 points, otherwise returns false

  },
  highestScoringWord = function() {
    // Function which returns the highest scoring word the user has played
  },
  highestWordScore = function() {
    // Function which returns the highestScoringWord score
  }
};

// optional
// var tilebag = {
//   one: ["J", "K", "Q", "X", "Z"],
//   two: ["B", "C", "F", "H", "M", "P", "V", "W", "Y"],
//   three: ["G"],
//   four: ["D", "L", "S", "U"],
//   six: ["N", "R", "T"],
//   eight: ["O"],
//   nine: ["A", "I"],
//   twelve: ["E"]
// }

// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
// };

// tests
var myScrabble = new Scrabble();

console.log(myScrabble.score("ZZzzZZ")); // 60
console.log(myScrabble.score("niiice")); // 8
console.log(myScrabble.score("aaaAaaa")); // 57
// console.log(myScrabble.score(456)); // throw exception

console.log(myScrabble.highestScoreFrom(["ZZzzZZ", "niiice", "cute"])); // "ZZzzZZ"
console.log(myScrabble.highestScoreFrom(["gg", "aaaa", "b"])); // "gg"
console.log(myScrabble.highestScoreFrom(["b", "c", "m", "da"])); // "b"
console.log(myScrabble.highestScoreFrom(["daaaaaA", "zzzzzJ", "m", "da"])); // "daaaaaA"
// console.log(myScrabble.highestScoreFrom(["niiice", ":)"])); // throw exception

module.exports = Scrabble;
