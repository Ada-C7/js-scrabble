
var scoreboard = {};

var populateScoreboard = function(letters, point) { // letters is an array
  for (var index = 0; index < letters.length; index++) {
    scoreboard[letters[index]] = point; // for every letter given, assign the point value
  }
};

populateScoreboard(["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"], 1);
populateScoreboard(["d", "g"], 2);
populateScoreboard(["b", "c", "m", "p"], 3);
populateScoreboard(["f", "h", "v", "w", "y"],4);
populateScoreboard(["k"], 5);
populateScoreboard(["j", "x"], 8);
populateScoreboard(["q", "z"], 10);



var Scrabble = function(word) {
  this.word = word;
};

Scrabble.prototype = {
  score: function() {
    var word_score = 0;
    // for each letter in the word, add points to word_score
    for (var letter = 0; letter < word.length; letter++) {
      word_score += letter.point;
    }
    // check length of word to see if they get a bonus
    if (word.length == 7) {
      word_score += 50;
    }
    // print total word score
    console.log(word_score.sum);
  }
};

Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

module.exports = Scrabble;
