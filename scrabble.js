var Scrabble = function() {};


  Scrabble.prototype.score = function(word) {
    var scoreChart = {"a": 1, "c": 3, "b": 3, "e": 1, "d": 2, "g": 2,
    "f": 4, "i": 1, "h": 4, "k": 5, "j": 8, "m": 3,
    "l": 1, "o": 1, "n": 1, "q": 10, "p": 3, "s": 1,
    "r": 1, "u": 1, "t": 1, "w": 4, "v": 4, "y": 4,
    "x": 8, "z": 10};


    var wordScore = 0;

    for (var i = 0; i < word.length; i++) {
      var letterScore = scoreChart[word.charAt(i)];
      wordScore += letterScore;
    }

    word.length == 7 ? wordScore += 50 : wordScore;

    return wordScore;

  };


  Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {

    var highestWord = "";
    var self = this;
    var highestScore = 0;
    var highestScores = [];

    arrayOfWords.forEach(function(word) {
      var score = self.score(word);

      if (score == highestScore) {
        highestScores.push(word);
      } else if (score > highestScore) {
        highestScores = [];
        highestScores.push(word);
        highestScore = score;
      };
    });

    console.log(highestScores);

    if (highestScores.length == 1) {
      highestWord = highestScores[0];
      return highestWord;
    } else if (highestScores.length > 1) {
        for (i = 0; i < highestScores.length; i++) {
          if (highestScores[i].length == 7) {
            highestWord = highestScores[i];
          } else {
            var shortestWord = highestScores[0];
            if(highestScores[i].length < shortestWord.length) {
              shortestWord = highestScores[i];
              highestWord = shortestWord;
            };
          };
          return highestWord;
        };
    };
  };


// var game = new Scrabble();
//
// console.log(game.highestScoreFrom(["hi", "moo", "eo", "q"]));
//
// module.exports = Scrabble;
