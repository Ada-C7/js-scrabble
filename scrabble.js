var scoreChart = {
  'A' : 1, 'E' : 1, 'I' : 1, 'O' : 1, 'U' : 1,
  'L' : 1, 'N' : 1, 'R' : 1, 'S' : 1, 'T' : 1,
  'D' : 2, 'G' : 2,
  'B' : 3, 'C' : 3, 'M' : 3, 'P' : 3,
  'F' : 4, 'H' : 4, 'V' : 4, 'W' : 4, 'Y' : 4,
  'K' : 5,
  'J' : 8, 'X' : 8,
  'Q' : 10, 'Z' : 10
};

// SCRABBLE
// constroctor -- instance variables
var Scrabble = function() {
  /* where to put the score chart?
  Before I thought I put it in here as an object
  Now I have it as a hash value outside*/
};

// prototype -- instance methods
Scrabble.prototype.score = function(input) {
  var word = input.toUpperCase();
  if (word.length > 7) { return 0 ;}
  var sum = 0;
  for (var i = 0; i < word.length; i++) {
    sum += scoreChart[word.charAt(i)];
  }
  if (word.length === 7) { return sum += 50 ;}
  return sum;
};

Scrabble.prototype.highestScoreFrom = function(input) {
  var arrayOfWords = input;
  var objectOfScores = [];
  var topWord = 0;
  var topScore = 0;
  for (var word of arrayOfWords) {
    var wordScore = this.score(word);
    objectOfScores.push({[word]: wordScore});
  }
  //return arrayOfScores;
  // TODO: actual scoring rules
  for (var key of objectOfScores) {
    if (objectOfScores.hasOwnProperty(key) > topScore) {
      topWord = key;
      topScore = objectOfScores.hasOwnProperty(key);
    } else if (objectOfScores.hasOwnProperty(key) == topScore && key.length < topWord.length && topWord.length != 7) {
      // picks the shorter word when both are less than 7
      topWord = key;
    } else if (objectOfScores.hasOwnProperty(key) == topScore && key.length == 7 && topWord.length != 7) {
      // picks the 7 letter word in a tie
      topWord = key;
    } else if (objectOfScores.hasOwnProperty(key) == topScore && key.length == topWord.length) {
      // pick the already given topWord if tie and same length
      topWord = topWord;
    }
    return topWord;
  }
};

// initializer
var myAttempt = new Scrabble();
console.log(myAttempt.score('kaitlin'));
// returns 61 (11 + 50)
console.log(myAttempt.highestScoreFrom(['potato', 'jam', 'party']));
// returns

//
// // Player
// // constroctor -- instance variables
// var Player = function(input) {
//   this.name = input;
//   this.plays = [];
// };
//
// // iterators -- instance methods
// Player.prototype.play = function(input) {
//   var word = input;
//   if (this.hasWon() === false) {
//     this.plays.push(word);
//   } else {
//     return false;
//   }
// };
//
// Player.prototype.totalScore = function() {
//   // Need to be able to use score method in Scrabble
//   this.playsTotals = [];
//   for (var word of this.plays) {
//     var wordScore = Scrabble.prototype.score(word);
//     this.playsTotals.push(wordScore);
//   }
//   var total = this.playsTotals.reduce((a, b) => a + b, 0);
//   return total;
// };
//
// Player.prototype.hasWon = function() {
//   if (this.totalScore() >= 100) {
//     return true;
//   } else {
//     return false;
//   }
// };
//
// Player.prototype.highestScoringWord = function() {
//   this.playsTotals
// };
//
// Player.prototype.highestWordScore = function() {
//   return Math.max(this.playsTotals);
// };
//
// // initializer
// var myPlayer = new Player('Bernie');
// //module.exports = Player;
