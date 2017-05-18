// GAME
var Scrabble = function() {};

Scrabble.prototype.score = function(word) {
  var one = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];
  var two = ["D", "G"];
  var three = ["B", "C", "M", "P"];
  var four = ["F", "H", "V", "W", "Y"];
  var five = ["K"];
  var eight = ["J", "X"];
  var ten = ["Q", "Z"];

  var wordScore = 0;
  var upcaseWord = word.toUpperCase();

  // loop through each character
  for (var i = 0; i < word.length; i++) {
    // if else statments to assign each character a point value
    if (one.includes(upcaseWord.charAt(i))) {
      wordScore += 1;
    } else if (two.includes(upcaseWord.charAt(i))){
      wordScore += 2;
    } else if (three.includes(upcaseWord.charAt(i))){
      wordScore += 3;
    } else if (four.includes(upcaseWord.charAt(i))){
      wordScore += 4;
    } else if (five.includes(upcaseWord.charAt(i))){
      wordScore += 5;
    } else if (eight.includes(upcaseWord.charAt(i))){
      wordScore += 8;
    } else if (ten.includes(upcaseWord.charAt(i))){
      wordScore += 10;
    } else {
      // case where there is a non character value in word
      // Add some sort of response or validations..
    }

  }
  return wordScore;
};

Scrabble.prototype.highestScore = function(arrayOfWords) {
  var winningWord = "";
  var winningScore = 0;

  for (var i = 0; i < arrayOfWords.length; i++) {
    var word = arrayOfWords[i];
    var wordScore = this.score(word);

    if (word.length == 7) {
      score += 50;
    }

    if (wordScore > winningScore) {
      winningScore = wordScore;
      winningWord = word;
    } else if (wordScore === winningScore) {
      if (wordScore.length < winningScore.length) {
        winningScore = wordScore;
        winningWord = word;
      }
    }
  }
  return winningWord;
};
// TESTS
// var testGame = new Scrabble();
//
// var wordsArray = ["Test", "buTTer", "caR"];
// var wordsArray = ["aaa", "eee"];

// var wordsArray = ["aaaaaaa"];
// should return buTTerfly
// console.log(testGame.score("adbfkjq"));
// test should = 4
// console.log(testGame.highestScore(wordsArray));
// butter should win... should return buTTer


// PLAYER
var Player = function(name, game) {
  this.name = name;
  this.plays = [];
  game = new Scrabble();
  this.scrabble = game;

};

Player.prototype.play = function(word) {
  // Returns false if player has already won
  if (this.hasWon()) {
    return false;
  } else {
  // Function which adds the input word to the plays Array
    this.plays.push(word);
    return true;
  }
};

Player.prototype.totalScore = function() {
  // Function which sums up and returns the score of the players words
  var total = 0;
  for (var i = 0; i < this.plays.length; i++) {
    total += this.scrabble.score(this.plays[i]);
  }
  return total;

};

Player.prototype.hasWon = function() {
  // Function which sums up and returns the score of the players words
  if (this.totalScore() > 100) {
    return true;
  } else {
    return false;
    }
};

Player.prototype.highestScoringWord = function() {
  // Function which returns the highest scoring word the user has played
  return this.scrabble.highestScore(this.plays);
};

Player.prototype.highestWordScore = function() {
  // Function which returns the highestScoringWord score
};

// Game set up:
var testPlayer = new Player("Theresa");

testPlayer.play("flower"); // 12pts
testPlayer.play("zzzz"); // 40pts

// Display results:
// Total points for the game
console.log("Player: " + testPlayer.name + "'s total points: " + testPlayer.totalScore());
// Has the player won
console.log("Has player won? " + testPlayer.hasWon());
// Highest Scoring word and its associated score
console.log("Winning word: " );


module.exports = Scrabble;
