var Scrabble = function() {
  this.scoreChart = {
    'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1,'R': 1, 'S': 1,
    'T': 1, 'D': 2, 'G': 2, 'B': 3, 'C': 3, 'M': 3, 'P': 3, 'F': 4, 'H': 4,
    'V': 4, 'W': 4, 'Y': 4,'K': 5, 'J': 8, 'X': 8, 'Q': 10, 'Z': 10
  }
};

// Returns the total score value for the given word.
Scrabble.prototype.score = function(word) {
  // check that given word only contains letters a-z and <= 7 letters long
  var score = 0
  for (i = 0; i < word.length; i++) {
    var letter = word[i].toUpperCase();
    score += this.scoreChart[letter];
  }
  return ( word.length === 7 ) ? score + 50 : score;
};

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  // check that is an array
  // var maxScore = arrayOfWords.find()

  // var topWords = [];
  // // var maxScore = 0;
  // var self = this;
  // var topWords = arrayOfWords.reduce(function(accumulator, word)) {
  //
  // }
  //
  //
  //   score = self.score(word);
  //   if (score > maxScore) {
  //     topWord = word;
  //     maxScore = score;
  //   } else if (score === maxScore && word.length != topWord.length) {
  //     if (word.length === 7 || word.length < topWord.length) {
  //       topWord = word;
  //       maxScore = score;
  //     }
  //   }
    //
    var topWord;
    var maxScore = 0;
    var self = this;
    arrayOfWords.forEach(function(word) {
      score = self.score(word);
      if (score > maxScore) {
        topWord = word;
        maxScore = score;
      } else if (score === maxScore && word.length != topWord.length) {
        if (word.length === 7 || word.length < topWord.length) {
          topWord = word;
          maxScore = score;
        }
      }
  })
  return topWord;
};
//legnth is 7 or min legnth
// if (letter.match(/[a-z]/i) !== null) {

// var my_score = new Scrabble();
// console.log(my_score.score("aoIOUAA"));
// console.log(my_score.score("pink"));
// console.log(my_score.highestScoreFrom(["PURPLE", "PINK"]));
module.exports = Scrabble;
