var Scrabble = function() {
  var letter_values = {
    a: 1,
    b: 3,
    c: 3,
    d: 2,
    e: 1,
    f: 4,
    g: 2,
    h: 4,
    i: 1,
    j: 8,
    k: 5,
    l: 1,
    m: 3,
    n: 1,
    o: 1,
    p: 3,
    q: 10,
    r: 1,
    s: 1,
    t: 1,
    u: 1,
    v: 4,
    w: 4,
    x: 8,
    y: 4,
    z: 10
  };
};

Scrabble.prototype.score = function(input_word) {
  // regex, raise errors
  if (/^[a-zA-Z]+$/.test(input_word)) {

    // case insensitive
    var word = input_word.toLowerCase();

    // 7 letter word bonus
    var word_score = (word.length == 7) ? 50 : 0;

    // isolate letters
    for (var i = 0; i < word.length; i++) {
      // assign scores to letters
      var letter_score = this.letter_values[word.charAt(i)];
      word_score += letter_score;
    }

    // return total score
    return word_score;

  } else {
    throw "Sorry, invalid input!";
  }
};

var myScrabble = new Scrabble();
// console.log(myScrabble.score(456));
console.log(myScrabble.score("niiice"));


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
