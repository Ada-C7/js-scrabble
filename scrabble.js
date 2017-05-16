// var Player = require('./player');
var Scrabble = function() {}

const SCORE_CHART = {
  A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1, D: 2, G: 2, B: 3, C: 3, M: 3, P: 3, F: 4, H: 4, V: 4, W: 4, Y: 4, K: 5, J: 8, X: 8, Q: 10, Z: 10
};
//

Scrabble.prototype = {
  score: function(word) {
    var score = 0;
    var letterToUpCase = word.toUpperCase();
    if (letterToUpCase.length === 7) {
      score += 50; }
      for (var i = 0; i < letterToUpCase.length; i++) {
        score += SCORE_CHART[letterToUpCase[i]];
      }; return score;
    },
    
    highestScoreFrom: function(arrayOfWords) {
      if (arrayOfWords.length === 0) {
        return false;
      } else {
        var high_word = arrayOfWords[0];
        var high_score = this.score(high_word);

        for (i = 1; i < arrayOfWords.length; i++) {
          var check_word = arrayOfWords[i];
          var check_score = this.score(check_word);
          var check_length = check_word.length;

          if (check_score > high_score || (check_score === high_score && (check_length === 7 || check_length < high_word.length))) {
            high_word = check_word;
            high_score = check_score;
          }
        }
        return high_word;
      }
    }
  };
  //
  // // YOUR CODE HERE
  // Scrabble.prototype.helloWorld = function() {
  //   return 'hello world!';
  // };
  //
  var scrabble = new Scrabble();
  // console.log(scrabble.helloWorld());
  console.log(scrabble.score("cat"));
  console.log(scrabble.score("natalia"));
  console.log(scrabble.highestScoreFrom(["natalia", "abc", "aaa"]));

  module.exports = Scrabble;

  // console.log(SCORE_CHART);
  // console.log("TESTS");
