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
      // If the top score is tied between multiple words and one used all seven letters, choose the one with seven letters over the one with fewer tiles
      // if top score tied between multiple words, pick the one with the fewest letters
      highScore = score;
      winningWord = word;
      console.log("Testing 2 " + winningWord + highScore);
    } else if ((score == highScore) && (word.length == 7 || word.length < winningWord.length)) {
      if (winningWord.length != 7) {
        highScore = score;
        winningWord = word;
        console.log("Testing " + winningWord + highScore);
      }
    }
  });
  return winningWord;
};

var Player = function(name) {
  this.name = name;
  this.plays = [];
};

// Function which adds the input word to the plays Array, false if player has won

Player.prototype.play = function(word) {
  if (this.hasWon() === true) {
    return false;
  } else {
    this.plays.push(word);
  }
};

// Function which sums up and returns the score of the players words
Player.prototype.totalScore = function() {
  var totalScore = 0;
  this.plays.forEach(function(word) {
    totalScore += Scrabble.prototype.score(word);
  });
  return totalScore;
};

// Function which returns true if the player has over 100 points, otherwise returns false
Player.prototype.hasWon = function() {
  if (this.totalScore() > 100) {
    return true;
  } else {
    return false;
  }
};

// Function which returns the highest scoring word the user has played
Player.prototype.highestScoringWord = function() {
  return Scrabble.prototype.highestScoreFrom(this.plays);
};

// Function which returns the highestScoringWord score
Player.prototype.highestWordScore = function() {

};

//  ****TESTING FUNCTIONS ******

// Testing Player

var newPlayer = new Player("habs");
console.log("New player is " + newPlayer.name);
newPlayer.play("maple");
newPlayer.play("apple");
console.log("Words that " + newPlayer.name + " played are " + newPlayer.plays);
console.log(newPlayer.name + " has scored " + newPlayer.totalScore());
console.log("Did " + newPlayer.name + " win? " + newPlayer.hasWon());
console.log("The highest scoring word is " + newPlayer.highestScoringWord());



// Testing Scrabble

//apple: 9, banana: 8, pof: 8, bananas: 59, zzzzzj: 58, gaaaaaa: 58, maple: 9
var game = new Scrabble();
play = game.score("maple");
// topScore = game.highestScoreFrom(["gaaaaaa", "zzzzzj"]);
// topScore = game.highestScoreFrom(["banana", "pof"]);
// topScore = game.highestScoreFrom(["apple", "maple"]);
topScore = game.highestScoreFrom(["maple", "apple"]);
console.log(play);
console.log(topScore);
module.exports = Scrabble;
