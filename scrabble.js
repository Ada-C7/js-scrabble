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
  for (obj in wordObjects) {
    if (wordObjects[obj].totalScore == highScore) {
      winningWords.push(wordObjects[obj]);
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
  return winner.word;
  // console.log("The winning word is: " + winner.word);
};


var game = new Scrabble();

// game.highestScoreFrom(["cat", "dog", "puppy", "candle", "puppy", "jokey", "hazy"]); //winner should be hazy
// game.highestScoreFrom(["cat", "dog", "puppy", "candle", "puppy", "puppw"]); //winner should be puppy
// game.highestScoreFrom(["zymurgy", "squiffy"]); //winner should be zymurgy
// console.log("winning word is: " + game.highestScoreFrom(["aaaaaaa", "puppy"])); //winner should be aaaaaaa

var Player = function(name) {
  this.name = name;
  this.plays = [];
};

Player.prototype.totalScore = function() {
  var totalScore = 0;
  for (var playword in this.plays) {
    totalScore = totalScore + this.plays[playword].totalScore;
  }
  return totalScore;
};

Player.prototype.hasWon = function() {
  if (this.totalScore() >= 100) {
    return true;
  } else {
    return false;
  }
};


Player.prototype.play = function(word) {
  if (!this.hasWon()) {
    newWord = new Word(word);
    this.plays.push(newWord);
  } else {
    return false;
  }
};

Player.prototype.highestScoringWord = function() {
  var scrabble = new Scrabble();
  var playWords = [];
  for (var wordObj in this.plays) {
    playWords.push(this.plays[wordObj].word);
  }
  var winningWord = scrabble.highestScoreFrom(playWords);
  return winningWord;
};

Player.prototype.highestWordScore = function() {
  var highWord = new Word(this.highestScoringWord());
  var highScore = highWord.totalScore;
  return highScore;
};


// highestScoringWord(): Function which returns the highest scoring word the user has played
// highestWordScore(): Function which returns the highestScoringWord score

var aurora = new Player("Aurora");
// console.log(aurora.name);
aurora.play("cat");
// console.log(aurora.plays);
// console.log("won? " + aurora.hasWon());
// console.log("score: " + aurora.totalScore());
aurora.play("squiffy");
// console.log(aurora.plays);
// console.log("won? " + aurora.hasWon());
// console.log("score: " + aurora.totalScore());
aurora.play("jiffy");
// console.log(aurora.plays);
console.log("score: " + aurora.totalScore());


console.log("won? " + aurora.hasWon());
console.log(aurora.highestScoringWord());
console.log(aurora.highestWordScore());

// console.log(aurora.highestScoringWord());


module.exports = Scrabble;
