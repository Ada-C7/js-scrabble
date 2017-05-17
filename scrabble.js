var Scrabble = function() {
};

var scoreChart = {
    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2: ['D' ,'G'],
    3: ['B', 'C', 'M', 'P'],
    4: ['F', 'H', 'V', 'W', 'Y'],
    5: ['K'],
    8: ['J', 'X'],
    10: ['Q', 'Z']
};

// YOUR CODE HERE
Scrabble.prototype = {
  score: function(word){
    if (word.length < 7 && word) {
      var wordScore = 0;
    } else if (word.length == 7){
      var wordScore = 50;
    } else {
      console.log('Invalid word length');
    }

    for (var i = 0, len = word.length; i < len; i++) {
      for (var key in scoreChart){
        var upLetter = word[i].toUpperCase();
        var scoreArray = scoreChart[key]
        if(scoreArray.includes(upLetter)){
          wordScore += Number(key);
        }
      }
    }

    return wordScore;
  },

  highestScoreFrom: function(arrayOfWords){
    var scoredWords = {};
    var self = this;
    var highestWord = {};

    arrayOfWords.forEach( function (word){
      scoredWords[word] = self.score(word);
    })

    highestWord[Object.keys(scoredWords)[0]] = scoredWords[Object.keys(scoredWords)[0]];

    for (var word in scoredWords){
      if (scoredWords[word] > highestWord[Object.keys(highestWord)] || isNaN(highestWord[Object.keys(highestWord)]) || (scoredWords[word] == highestWord[Object.keys(highestWord)] && word.length < Object.keys(highestWord)[0].length)){
        delete highestWord[Object.keys(highestWord)];
        highestWord[word] = scoredWords[word];
      }
    }

    return Object.keys(highestWord)[0];
  }
};

var allTheWords = ["Spagetti", "TRUSTA", "AAAAAA"];
var letsScrabble = new Scrabble();

// console.log(letsScrabble.score("TRUSTAL"));
// console.log(letsScrabble.highestScoreFrom(allTheWords));

module.exports = Scrabble;
