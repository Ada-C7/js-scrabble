var Scrabble = function() {};

Scrabble.score = function(word) {
  var scores = { a: 1, b: 3, c: 3, d: 2,e: 1, f: 4, g: 2, h: 4, i: 1, j: 8, k: 5, l: 1, m: 3, n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t: 1, u: 1, v: 4, w: 4, x: 8, y: 4, z: 10 };
  var total = 0;
  word = word.toLowerCase();

  for (var i = 0; i < word.length; i++) {
    total += scores[word[i]];
  }

  if (word.length == 7) {
    total += 50;
  }
  return total;
};

Scrabble.highestScoreFrom = function(arrayOfWords) {
  var highScore = -1;
  var highScoreWord;
  var winningWordLength = 8;

  for (var i = 0; i < arrayOfWords.length; i++) {
    var word = arrayOfWords[i];
    var score = this.score(word);

    if (score == highScore) {
      var sevenBonus = (winningWordLength == 7);

      if (!sevenBonus && (word.length == 7 || word.length < winningWordLength)) {
        highScore = score;
        highScoreWord = word;
        winningWordLength = word.length;
      }
    } else if (score > highScore) {
      highScore = score;
      highScoreWord = word;
      winningWordLength = word.length;
    }

    // console.log("++++++++");
    // console.log(word);
    // console.log("score: " + score);
    // console.log("high score: " + highScore);
    // console.log("winning word: " + highScoreWord);
    // console.log("winning word length: " + winningWordLength);
  }
  return highScoreWord;
};

// var highWord = Scrabble.highestScoreFrom(["aaa", "sss"]);
// console.log(highWord);

module.exports = Scrabble;
