var Scrabble = function() {};



Scrabble.prototype = {
  score: function(word) {
    var values = {
      a: 1,
      e: 1,
      i: 1,
      o: 1,
      u: 1,
      l: 1,
      n: 1,
      r: 1,
      s: 1,
      t: 1,
      d: 2,
      g: 2,
      b: 3,
      c: 3,
      m: 3,
      p: 3,
      f: 4,
      h: 4,
      v: 4,
      w: 4,
      y: 4,
      k: 5,
      j: 8,
      x: 8,
      q: 10,
      z: 10
    };
    var score = 0;

    word = word.toLowerCase();

    for (i = 0; i < word.length; i++) {
      letter = word[i];
      score += values[letter];
    }

    if (word.length >= 7) {
      score += 50;
    }

    return score;
  },

  highestScoreFrom: function(arrayOfWords) {
    var highestWord = arrayOfWords[0];
    var highestScore = this.score(arrayOfWords[0]);

    for (var i = 1; i < arrayOfWords.length; i++) {
      var currentWord = arrayOfWords[i];
      var currentWordScore = this.score(currentWord);

      if (currentWordScore > highestScore) {
        highestScore = currentWordScore;
        highestWord = currentWord;
      } else if (currentWordScore == highestScore){
          if (currentWord.length == 7 || currentWord.length < highestWord.length) {
            highestWord = currentWord;
            highestScore = currentWordScore;
          }
      }
    }
  return highestWord;
  }
};

var test = new Scrabble();
console.log(test.score("zox"));
console.log(test.score("exlax"));
console.log(test.score("Boooooo"));

console.log(test.highestScoreFrom(["TEST", "exlax", "hi", "bye", "zooz"]));

module.exports = Scrabble;
