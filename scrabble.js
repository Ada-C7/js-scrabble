var Scrabble = function() {};


// YOUR CODE HERE
Scrabble.prototype.score = function(word) {

  var scoreChart = {
    "A" : 1,
    "E" : 1,
    "I" : 1,
    "O" : 1,
    "U" : 1,
    "L" : 1,
    "N" : 1,
    "R" : 1,
    "S" : 1,
    "T" : 1,
    "D" : 2,
    "G" : 2,
    "B" : 3,
    "C" : 3,
    "M" : 3,
    "P" : 3,
    "F" : 4,
    "H" : 4,
    "V" : 4,
    "W" : 4,
    "Y" : 4,
    "K" : 5,
    "J" : 8,
    "X" : 8,
    "Q" : 10,
    "Z" : 10
  };

  // return an array of letters in the word
  var letters = word.toUpperCase().split("");

  var scoreTotal = 0;

  letters.forEach(function (letter) {
    scoreTotal += scoreChart[letter];
  });
  if (word.length >= 7) {
    scoreTotal += 50;
  }
  return scoreTotal;
};

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  var highScore = 0;
  var winningWord = "";
  //return the word in the array with the highest score
  arrayOfWords.forEach(function (word) {
    var score = Scrabble.prototype.score(word);

    if (score > highScore) {
      highScore = score;
      winningWord = word;
      console.log("Testing " + winningWord + highScore);
    } else if (score == highScore) {
        // If the top score is tied between multiple words and one used all seven letters, choose the one with seven letters over the one with fewer tiles
      if (((word.length == 7 || word.length < winningWord.length)) && (winningWord.length != 7)) {
        // if top score tied between multiple words, pick the one with the fewest letters
        // highScore = score;
        winningWord = word;
        console.log("Testing 2" + winningWord + highScore);
      }
    }


  // } else if ((score == highScore) && (word.length >= 7 ) && (word.length > winningWord.length)) {
  //   winningWord = word;
  //   console.log("Testing 3" + winningWord + highScore);


// If the there are multiple words that are the same score and same length, pick the first one in supplied list


// if (score > highScore) {
//   highScore = score;
//   winningWord = word;
//     console.log("Testing " + winningWord + highScore);
//   // if top score tied between multiple words, pick the one with the fewest letters
// } else if ((score > highScore) && (word.length < winningWord.length)) {
//     winningWord = word;
//     highScore = score;
//     console.log("Testing 2" + winningWord);
//     // If the top score is tied between multiple words and one used all seven letters, choose the one with seven letters over the one with fewer tiles
// // } else if ((score > highScore) && (word.length >= 7 ) && (winningWord.length < word.length)) {
// //   winningWord = word;
// //   highScore = score;
// }
//     // If the there are multiple words that are the same score and same length, pick the first one in supplied list

});
return winningWord;
};


var Player = function(name, plays) {
  this.name = name;
  this.plays = plays;

};

Player.prototype.play = function(word) {

};

Player.prototype.totalScore = function() {

};

Player.prototype.hasWon = function() {

};

Player.prototype.highestScoringWord = function() {

};

Player.prototype.highestWordScore = function() {

};

//apple: 9, banana: 8, pof: 8, bananas: 59, zzzzzj: 58, gaaaaaa: 58
var game = new Scrabble();
play = game.score("gaaaaaa");
 // topScore = game.highestScoreFrom(["gaaaaaa", "zzzzzj"]);
topScore = game.highestScoreFrom(["banana", "pof"]);
console.log(play);
console.log(topScore);
module.exports = Scrabble;
