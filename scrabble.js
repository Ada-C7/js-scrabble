var LETTERS_VALUES = {
  A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
  D: 2, G: 2,
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10
};

var Scrabble = function() {
  // this.word = word;
};

Scrabble.prototype = {
  score: function(word){
    var word_array = word.toUpperCase().split(""),
    total = 0;

    if (word_array.length == 7){
      total += 50;
    }
    else {
      for (var i = 0; i < word_array.length; i++){
        total += LETTERS_VALUES[word_array[i]];
      }
    }
    return total;
  },

  highestScoreFrom: function(arrayOfWords){
    var max = 0,
    maxWords = []
    shorterWord = "";

    for (var i = 0; i < arrayOfWords.length; i++){
      wordScore = this.score(arrayOfWords[i]);
      if (wordScore == max){
        maxWords.push(arrayOfWords[i]);
      }
      else if (wordScore > max) {
        max = wordScore;
        maxWords = [arrayOfWords[i]];
      }
    }

    if (maxWords.length > 1){
      for (var i = 0; i < maxWords.length; i++){
        if (maxWords[i].length == 7){
          return maxWords[i];
        }
        else if (maxWords[i].length < shorterWord.length) {
          shorterWord = maxWords[i];
        }
      }
      return shorterWord;
    }
    else {
      return maxWords;
    }
  }
}; //closing prototype


Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

module.exports = Scrabble;

// var aGame = new Scrabble();
// var palabra = aGame.score("Lauraaaa");
// var palabra = aGame.highestScoreFrom(["lau", " ", "peter", "jajajaaa", "hola"]);
// console.log(palabra)
