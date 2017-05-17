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
var testGame  = new Scrabble();

// var wordsArray = ["Test", "buTTer", "caR"];
var wordsArray = ["aaa", "eee"];

// var wordsArray = ["aaaaaaa"];
// should return buTTerfly
// console.log(testGame.score("adbfkjq"));
// test should = 4
console.log(testGame.highestScore(wordsArray));
// butter should win... should return buTTer


// PLAYER




module.exports = Scrabble;
