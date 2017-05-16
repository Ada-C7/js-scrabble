var Scrabble = function() {};

// Scrabble.score = function(word) {
score = function(word) {

  // TO DO:
  // - error for invalid characters

  if ( typeof(word) !== 'string' || word.length > 7 ) {
    return "Invalid word";
  }

  var wordScore = word.length == 7 ? 50 : 0,
      letterValues = {
        A: 1,   B: 3,   C: 3,   D: 2,
        E: 1,   F: 4,   G: 2,   H: 4,
        I: 1,   J: 8,   K: 5,   L: 1,
        M: 3,   N: 1,   O: 1,   P: 3,
        Q: 10,  R: 1,   S: 1,   T: 1,
        U: 1,   V: 4,   W: 4,   X: 8,
        Y: 4,   Z: 10
      };

  for ( i = 0; i < word.length; i++ ) {
    letter = word.toUpperCase()[i];
    wordScore += letterValues[letter];
  }

  return wordScore;
};

// Scrabble.highestScoreFrom = function(arrayOfWords) {
highestScoreFrom = function(arrayOfWords) {

  if ( typeof(arrayOfWords) !== 'array' ) {
    return "Send me an array and we can try this again...";
  }

  // TO DO -- Error Handling:
  // make sure input is actually an array

  var highestScore = 0;
  var winner = undefined; // needs to return the actual word

  arrayOfWords.forEach(function(word) {
    if ( score(word) > highestScore ){
      highestScore = score(word);
      winner = word; }
    // else if ( score(word) == hightestScore)
    //   if ( winner.length == 7 || word.length == 7)
    //   else if ()

  });

  return "The winner was: " + winner + " for " + highestScore + " points";
};

// Scrabble.tieBreaker = function(word1, word2) {
//   if winner.length == 7 || word.length == 7
//   winner.length <= word.length ? tie_winner = word : tie_winner = winner
// else
//   word.length <= winner.length ? tie_winner = winner : tie_winner = word
// end
// };

myGame = new Scrabble();

// console.log(myGame.score("zzzzzz"));
console.log(score("hotdog"));


var myWordsList = ["ostrich", "cat", "whale", "tiger", "flamingo", "zzzzzzzzzzzz"];
// console.log(myGame.highestScoreFrom(myWordsList));
console.log(highestScoreFrom("heres's some words"));


// ===============================================================

// WAVE 2

// Create a new Player object. The object should have the following functions:
//
// Constructor: Called when you use new Player(name),
// sets up an instance with the instance variable name assigned
// name: property which returns the value of the player's name
// plays: property which returns an Array of the words played by the player
// play(word): Function which adds the input word to the plays Array
// Returns false if player has already won
// totalScore(): Function which sums up and returns the score of the players words
// hasWon(): Function which returns true if the player has over 100 points, otherwise returns false
// highestScoringWord(): Function which returns the highest scoring word the user has played
// highestWordScore(): Function which returns the highestScoringWord score

// var Player = function(name){
//     this.name = name;
// };

module.exports = Scrabble;
