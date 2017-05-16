var Scrabble = function() {};

var letterScores = {
  'A': 1, 'B': 3, 'C': 3, 'D': 2, 'E': 1, 'F': 4, 'G': 2, 'H': 4, 'I': 1,
  'J': 8, 'K': 5, 'L': 1, 'M': 3, 'N': 1, 'O': 1, 'P': 3, 'Q': 10, 'R': 1, 'S': 1,
  'T': 1, 'U': 1, 'V': 4, 'W': 4, 'X': 8, 'Y': 4, 'Z': 10
};

function breakTie(words) {

}

Scrabble.prototype.score = function(word) {
  var total = 0;
  var letters = word.toUpperCase().split('');

  letters.forEach(function (letter) {
    var score = letterScores[letter];
    total += score;
  });
  // console.log(total);
  return total;
};

Scrabble.prototype.highestScoreFrom = function(words){
  var wordsWithScores = {};
  var highestScore = 0;

  words.forEach(function (word) {
    var score = Scrabble.prototype.score(word);
    wordsWithScores[word] = score;

    if (score > highestScore){
      highestScore = score;
    }
  });

  // var highestScoring = [];
  // below gets you an array of all the keys or values
  // Object.keys(wordsWithScores).forEach(function (word){
  //   if ( wordsWithScores[word] == highestScore ) {
  //     highestScoring.push(word);
  //   }
  // });

  // samething as above - using filter
  var highestScoring = Object.keys(wordsWithScores).filter( function(word) {
    if ( wordsWithScores[word] == highestScore ) {
      return word;
    }
  });


  return highestScoring;
};

module.exports = Scrabble;

// this works
// console.log(Scrabble.prototype.score("HELLO"));
// points 8, 5, 12
words = ["hello", "cateee", "hi", "dog", "aaaaaaaa"];
// working - returning zoo
console.log(Scrabble.prototype.highestScoreFrom(words));
