var Scrabble = function() {
  SCORE_CHART = {
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
};


  // YOUR CODE HERE
Scrabble.prototype.score = function(word) {
    // return an array of letters in the word
    var letters = word.toUpperCase().split("");

  var scoreTotal = 0;
  letters.forEach(function (letter) {
    scoreTotal += SCORE_CHART[letter];
  });
  if (word.length >= 7) {
    scoreTotal += 50;
  }
  return scoreTotal;
};

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  var highScore = 0;
  var wordScores = [];
  //return the word in the array with the highest score
  arrayOfWords.forEach(function (word) {
    var score = Scrabble.prototype.score(word);
    if (score > highScore ) {
      highScore = score;
      wordScores.push(word);
    }
  });
  return wordScores;
};


var game = new Scrabble();
play = game.score("apple");
topScore = game.highestScoreFrom(["aei", "zq"]);
console.log(play);
console.log(topScore);
module.exports = Scrabble;
