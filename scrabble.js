
var Scrabble = function() {};
var scoreChart = {
  "a": 1, "b": 3, "c": 3, "d": 2, "e": 1, "f": 4, "g": 2, "h": 4, "i": 1, "j": 8, "k": 5, "l": 1, "m": 3, "n": 1, "o": 1, "p": 3, "q": 10, "r": 1, "s": 1, "t": 1, "u": 1, "v": 4, "x": 8, "y": 4, "z": 10
}

Scrabble.prototype.score = function(word) {
  //proud of this ternary that is assigning scoreOfWord based on whether word used all 7 tiles to get 50 point bonus
  var scoreOfWord = word.length == 7? 50: 0;
  //accounting for if user input is varied in upper and lower case.
  // word = word.toLowerCase();
  //loop that is iterating through word letter by letter and comparing it to scoreChart object
  for (var i = 0; i < word.length; i++)
  scoreOfWord += scoreChart[word.charAt(i)];
  return scoreOfWord
  scoreOfWord = 0;
};

// collection of any word that has the current highest score as you're iterating through
Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  var highScoringWord = this.score(arrayOfWords[0]);
  for (var i = 0; i < arrayOfWords.length; i++) {
    var wordScore = this.score(arrayOfWords[i]);
    if ( wordScore > highScoringWord) {
      highScoringWord = wordScore;
      return highScoringWord
    }
  };

  // return collection of words with tieing highest scores
  var collectionHighestScoringWords = [];
  for (var i = 0; i < arrayOfWords.length; i++) {
    if (this.score(arrayOfWords[i]) == highScoringWord) {
      collectionHighestScoringWords.push(arrayOfWords[i])
      return collectionHighestScoringWords
    }
  };

  // return word with shortest length if multiple words tie for score
  var selectShortestWord = collectionHighestScoringWords[0];
  for (var i = 0; i < collectionHighestScoringWords.length; i++){
    if (collectionHighestScoringWords[i].length < selectShortestWord.length) {
      selectShortestWord = collectionHighestScoringWords[i];
      return selectShortestWord
    }
  };

  // return whatever word was supplied first if words tie for score and length
  var tiedScoreAndLength = collectionHighestScoringWords[0]
  if (collectionHighestScoringWords.length > 1){
    return collectionHighestScoringWords[0]
  };
//end of highestScoreFrom function
}



// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
// };
//
module.exports = Scrabble;

// var player1 = new Scrabble();
// var player2 = new Scrabble();
// console.log("Player 1 played: 'Marisol', and received " + player1.score("MaRiSoL") + " points.")
// console.log("Player 1's highest scoring word was: " + player1.highestScoreFrom([ "QqQq", "zZzZ"]))
// console.log("Player 2's highest scoring word was: " + player2.highestScoreFrom([ "zZzZ", "QqQq"]))
