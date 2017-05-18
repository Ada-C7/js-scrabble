const SCORECHART = {
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
  "z": 10,
};


var Scrabble = {
  score: function(word){
    var total = 0;
    for (var n = 0, len = word.length; n < len; n++) {
      var letterScore = SCORECHART[word[n]];
      total += letterScore;
    };
    if (word.length == 7){
      return total + 50;
    } else {
    return total;
    }
  },

  highestScoreFrom: function(arrayOfWords){
    var highestScore = 0;
    var scoreArray = [];
    var highestScoreArray = [];
    var self = this;
    arrayOfWords.forEach(function(word){
      wordScore = self.score(word);
      scoreArray.push(wordScore);

      if (wordScore > highestScore) {
        highestScore = wordScore;
      }
    });

    scoreArray.forEach(function(score, n){

      if (score == highestScore) {
        highestScoreArray.push(arrayOfWords[n]);
      }
    });

    highestScoreArray.sort(function(a, b) {
      return a.length > b.length;
    });




    var winningWord = null
    for (var n = 0, len = highestScoreArray.length; n < len; n++) {
        if(highestScoreArray[n].length == 7){
          winningWord = highestScoreArray[n];
          return winningWord;
        }
    }

    if (winningWord == null){
      winningWord = highestScoreArray[0];
    }
    return winningWord;
  }

};


module.exports = Scrabble;
