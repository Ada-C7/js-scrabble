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
          winner = this.tiebreaker(word, winner);
        }
      });

      return winner;
    } else {
      throw "Sorry, invalid input! Please enter an array of words.";
    }
  }

  // tiebreaker method
  // if tied for top score, winner is shortest length
  // seven letter words get 50 points, if tied for top score, winner is 7 letter word (over shorter)
  // if multiple ties of same length, winner is first word
};

var myScrabble = new Scrabble();

console.log(myScrabble.score("ZZzzZZ")); // 60
console.log(myScrabble.score("niiice")); // 8
// console.log(myScrabble.score(456)); // throw exception

console.log(myScrabble.highestScoreFrom(["ZZzzZZ", "niiice", "cute"])); // "ZZzzZZ"
console.log(myScrabble.highestScoreFrom(["niiice", ":)"])); // throw exception


Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

module.exports = Scrabble;

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
