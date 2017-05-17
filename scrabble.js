
//// set up scrabble to be an object that contians a sub-object and scoring functions
var Scrabble = {

  letterScores: letterScores = {
    'A': 1, 'B': 3, 'C': 3, 'D': 2, 'E': 1, 'F': 4, 'G': 2, 'H': 4, 'I': 1,
    'J': 8, 'K': 5, 'L': 1, 'M': 3, 'N': 1, 'O': 1, 'P': 3, 'Q': 10, 'R': 1, 'S': 1,
    'T': 1, 'U': 1, 'V': 4, 'W': 4, 'X': 8, 'Y': 4, 'Z': 10
  },

  // this function will score a word - the word has already been tested in the player
  // class so you know it is a good word
  score: function(word) {
    var total = 0;
    var letters = word.toUpperCase().split('');

    letters.forEach(function (letter) {
      var score = this.letterScores[letter];
      total += score;
    });

    return word.length === 7 ?  total += 50 : total;
  },


  // this function will find the highest scoring word or words if there is a tie
  highestScoreFrom: function (words) {
    var highestScoringWords = this._findHighestScoring(words);
    var highestWord = undefined;

    if (highestScoringWords.length === 1) {
      highestWord = highestScoringWords[0];

    } else {
      highestWord = this._breakTie(highestScoringWords);
    }

    return highestWord
  },

// this is a helper function for highestScoreFrom
  _findHighestScoring: function(words) {
    var wordsWithScores = {};
    var highestScore = 0;

    // add word with its score into wordsWithScores obj - will also find the highest score
    words.forEach(function (word) {
      var score = Scrabble.score(word);
      wordsWithScores[word] = score;

      // will reassigne the highestScore
      if ( score > highestScore ){ highestScore = score; }
    });


    // finds any tie words - or will return an array with the highest scoring word
    var highestScoring = Object.keys(wordsWithScores).filter( function(word) {
      if ( wordsWithScores[word] === highestScore ) { return word; }
    });

    // returns word(s) with the highest score
    return highestScoring;
  },

  // a helper function for highestScoreFrom
  _breakTie: function(words){
    var winner = undefined;
    var length = 8;

    // loops through the tie words - if length is 7 - that word is the winner
    // else the shorest length word is the winner.
    words.forEach(function (word){
      if (word.length === 7 ) {
        winner = word;

      } else if ( word.length < length ){
        winner = word;
        length = word.length; }
    });

    return winner;
  }
}

module.exports = Scrabble;
