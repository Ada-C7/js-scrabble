var Scrabble = {

  letterScores: letterScores = {
    'A': 1, 'B': 3, 'C': 3, 'D': 2, 'E': 1, 'F': 4, 'G': 2, 'H': 4, 'I': 1,
    'J': 8, 'K': 5, 'L': 1, 'M': 3, 'N': 1, 'O': 1, 'P': 3, 'Q': 10, 'R': 1, 'S': 1,
    'T': 1, 'U': 1, 'V': 4, 'W': 4, 'X': 8, 'Y': 4, 'Z': 10
  },

  score:
    function(word) {
      var total = 0;
      var letters = word.toUpperCase().split('');

      letters.forEach(function (letter) {
        var score = this.letterScores[letter];
        total += score;
      });

      return word.length === 7 ?  total += 50.0 : total;
    },

  highestScoreFrom:
    function (words) {
      var highestScoringWords = this._findHighestScoring(words);
      var highestWord = undefined;

      if (highestScoringWords.length == 1) {
        highestWord = highestScoringWords[0];

      } else {
        highestWord = this._breakTie(highestScoringWords);
      }

      return highestWord
    },

  _findHighestScoring:
    function(words) {
      var wordsWithScores = {};
      var highestScore = 0;

      // add word with its score into wordsWithScores obj - will also find the highest score
      words.forEach(function (word) {
        var score = Scrabble.score(word);
        wordsWithScores[word] = score;

        if ( score > highestScore ){
          highestScore = score;
        }
      });
        //find any tie words - or singular words with the highest score
      var highestScoring = Object.keys(wordsWithScores).filter( function(word) {
        if ( wordsWithScores[word] == highestScore ) {
          return word;
        }
      });

      return highestScoring;
    },

  _breakTie:
    function(words){
      console.log(words);

      var winner = undefined;
      var length = 8;

      words.forEach(function (word){
        if ( word.length < length ){
          winner = word;
          length = word.length;
        }
      });

      return winner;
   }
}
module.exports = Scrabble;

words = ["hello", "cateee", "hi", "dog", "DAAAAA"];
console.log(Scrabble.score("hello"));
console.log(Scrabble.highestScoreFrom(words));
