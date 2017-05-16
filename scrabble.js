var Scrabble = function() {};

var scoring = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"]
};


function score(word) {
  var upword = word.toUpperCase();
  var strArray = upword.split("");
  var total = 0;

  for (var letter in strArray) {
    for (var score in scoring) {
      if (scoring[score].includes(strArray[letter]) === true) {
        var value = Number(score);
        total = total + value;
      }
    }
  }
  return total;
}

var Word = function(word) {
  this.word = word;
  this.length = word.length;
  this.baseScore = score(this.word);
  if (this.length == 7) {
    this.bonus = true;
  } else {
    this.bonus = false;
  }
  if (this.bonus === true) {
    this.totalScore = this.baseScore + 50;
  } else {
    this.totalScore = this.baseScore;
  }
};


Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {

  wordObjects = [];
  for (var word in arrayOfWords) {
    var wordObj = new Word(arrayOfWords[word]);
    wordObjects.push(wordObj);
  }

  justScores = [];
  for (var obj in wordObjects) {
    justScores.push(wordObjects[obj].totalScore);
  }
  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }
  var highScore = getMaxOfArray(justScores);
  var winningWords = [];
  var sevenLetters = [];
  var shortestWords = [];
  for (var wobj in wordObjects) {
    if (wordObjects[wobj].totalScore == highScore) {
      winningWords.push(wordObjects[wobj]);
    }
  }
  var lengths = [];

  for (var long in winningWords) {
    if (winningWords[long].length == 7) {
      sevenLetters.push(winningWords[long]);
    }
    lengths.push(winningWords[long].length);
  }

  function getMinLength(lengthArray) {
    return Math.min.apply(null, lengthArray);
  }

  var minLength = getMinLength(lengths);
  for (long in winningWords) {
    if (winningWords[long].length == minLength) {
      shortestWords.push(winningWords[long]);
    }
  }
  var winner = null;
  if (winningWords.length == 1) { //if there's only one winner
    winner = winningWords[0];
  } else if (sevenLetters.length >= 1) { // any 7ltrs pick the 1st one
    winner = sevenLetters[0];
  } else { // >1 winner and none are 7ltrs
    winner = shortestWords[0];
  }
  console.log("The winning word is: " + winner.word);
};


var game = new Scrabble();

game.highestScoreFrom(["cat", "dog", "puppy", "candle", "puppy", "jokey", "hazy"]); //winner should be hazy
game.highestScoreFrom(["cat", "dog", "puppy", "candle", "puppy", "puppw"]); //winner should be puppy
game.highestScoreFrom(["zymurgy", "squiffy"]); //winner should be zymurgy
game.highestScoreFrom(["aaaaaaa", "puppy"]); //winner should be aaaaaaa



module.exports = Scrabble;
