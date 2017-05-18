var Scrabble = function() {};

// Returns the total score value for the given word.
Scrabble.prototype.score = function(word) {
  // Checks if word is longer than 7 letters or contains a char other than a-z.
  if ((!(word instanceof String)) || !/^[a-zA-Z]+$/.test(word) || word.length > 7) {
    return 0
  };

  var scoreChart = {
    'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1,'R': 1, 'S': 1,
    'T': 1, 'D': 2, 'G': 2, 'B': 3, 'C': 3, 'M': 3, 'P': 3, 'F': 4, 'H': 4,
    'V': 4, 'W': 4, 'Y': 4,'K': 5, 'J': 8, 'X': 8, 'Q': 10, 'Z': 10
  };

  var score = 0
  for (i = 0; i < word.length; i++) {
    var letter = word[i].toUpperCase();
    score += scoreChart[letter];
  }
  return ( word.length === 7 ) ? score + 50 : score;
};

// Returns the word in the given array with the highest score.
Scrabble.prototype.highestScoreFrom = function(words) {
var maxScore = this.highestScore(words);
// Checks if the array given is valid.
if (maxScore === 0) { return null };

// Finds the highest scoring word(s).
var topWords = words.filter(function(word) {
  return self.score(word) === maxScore;
});

// If there is only one highest scoring word, return that.
if (topWords.length === 1) { return topWords[0] };

// If there's a tie, checks if there is a highest score word with a length of 7.
var topWord = topWords.find(function(word) { return word.length === 7 });
// Otherwise, looks for the shortest word.
return topWord || topWords.reduce((prev, curr) => (prev.length <= curr.length) ? prev : curr);

// Alternative solution
// var topWord = null;
// var maxScore = 0;
// var self = this;
// arrayOfWords.forEach(function(word) {
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
// });
// return topWord;
};

Scrabble.prototype.highestScore = function(words) {
  // Checks if input is an array. Otherwise, returns 0.
  if (!(words instanceof Array) || (words.length === 0)) { return 0 };

  self = this;
  var scores = words.map(function(word) {
    return self.score(word);
  });
  return Math.max(...scores);

  // Alternative solution
  // var topScore = arrayOfWords.reduce(function(topScore, currWord) {
  //   var currScore = self.score(currWord);
  //   return Math.max(topScore, currScore);
  // }, 0);
  // return topScore;
};


var my_score = new Scrabble();
// console.log(my_score.score(undefined));
// console.log(my_score.score("aoIOUAA"));
// console.log(my_score.score("pink"));
// console.log(my_score.score("elephant"));
// console.log(my_score.score(""));
// console.log(my_score.highestScoreFrom(["PURPLE", "PINK", "rainbow"]));
// console.log(my_score.highestScoreFrom(["PURPLE", "PINK"]));
// console.log(my_score.highestScoreFrom(["rainbov", "rainbow"]));
// console.log(my_score.highestScoreFrom([]));
// console.log(my_score.highestScoreFrom("elephan"));
module.exports = Scrabble;
