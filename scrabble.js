// TWO SECTIONS they could be separated in different modles but thats not important right now as long as they are obvious in different sections
// Game
var Scrabble = function() {};

/* ##### BASELINE #####
Scrabble.prototype.helloWorld = function() {
return 'hello world!';
};
var test = new Scrabble();
console.log(test.helloWorld());
######################### */


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

  //MAIN//
  // loop that will go through arrayOfWords
  for (var i = 0; i < arrayOfWords.length; i++) {
    var word = arrayOfWords[i];
    var score = this.score(word);

    // 50 pt bonus for using all seven letters
    if (word.length == 7) {
      score += 50;
    }

    //conditionals that test
    // top score tied between two words? choose shortest word
    // multiple words what are same score and same length? pick the first one

  //return winning word
  return score;
  }
};
// TESTS
var testGame  = new Scrabble();

// var wordsArray = ["Test", "buTTerfly", "caR"];
var wordsArray = ["aaaaaaa"];
// should return buTTerfly
console.log(testGame.score("adbfkjq"));
// test should = 4
console.log(testGame.highestScore(wordsArray));

module.exports = Scrabble;

// PLAYER






// 1. start with ruby code and go from there
// OR 2. start from scratch to see how far you have come and to see if you go about solving in a different way
// will have to look up new syntax of course sense this is a new language
