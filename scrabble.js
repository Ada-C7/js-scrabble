var Scrabble = function() {
  var letter_values = {
    one: ["A", "E", "I", "L", "N", "O", "R", "S", "T", "U"],
    two: ["D", "G"],
    three: ["B", "C", "M", "P"],
    four: ["F", "H", "V", "W", "Y"],
    five: ["K"],
    eight: ["J", "X"],
    ten: ["Q", "Z"]
  };
};

Scrabble.prototype.score = function(word) {
  // score(word): returns the total score value for the given word. The word is input as a string (case insensitive).
  // isolate letters
  for (var i = 0; i < word.length; i++) {
    charAt(i);
  }
  // assign scores to letters
  // add scores together
  // return total score

};


// highestScoreFrom(arrayOfWords): returns the word in the array with the highest score.
// iterate through words array
// scores array var
// for each word, return score w score(word) (map to score array)
// return max of scores array

// tiebreaker method
// if tied for top score, winner is shortest length
// seven letter words get 50 points, if tied for top score, winner is 7 letter word (over shorter)
// if multiple ties of same length, winner is first word

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
