const SCORECHART = {
  "a": 1,
  "b": 3,
  "c": 3,
  "d": 2,
  "e": 1,
  "f": 4,
  "g": 2,
  "h": 4,
  "i": 1,
  "j": 8,
  "k": 5,
  "l": 1,
  "m": 3,
  "n": 1,
  "o": 1,
  "p": 3,
  "q": 10,
  "r": 1,
  "s": 1,
  "t": 1,
  "u": 1,
  "v": 4,
  "w": 4,
  "x": 8,
  "y": 4,
  "z": 10,
};


var Scrabble = {
  score: function(word){
    var total = 0;
    for (var n = 0, len = word.length; n < len; n++) {
      var letterScore = SCORECHART[word[n]];
      total += letterScore;
    };
    if (word.length == 7){
      return total + 50;
    } else {
    return total;
    }
  },

  highestScoreFrom: function(arrayOfWords){
    // console.log("here", arrayOfWords);
    var highestScore = 0;
    var scoreArray = [];
    var highestScoreArray = [];
    var self = this;
    arrayOfWords.forEach(function(word){
      wordScore = self.score(word);
      scoreArray.push(wordScore);

      if (wordScore > highestScore) {
        highestScore = wordScore;
      }
    });

    scoreArray.forEach(function(score, n){

      if (score == highestScore) {
        highestScoreArray.push(arrayOfWords[n]);
      }
    });

    highestScoreArray.sort(function(a, b) {
      return a.length > b.length;
    });




    var winningWord = null
    console.log("after sort " , highestScoreArray);

    highestScoreArray.forEach(function(word){
      console.log("highest each : ", word);
      if(word.length == 7){
        winningWord = word;
        return winningWord;
      }
    })


    if (winningWord == null){
      winningWord = highestScoreArray[0];
    }
    return winningWord;
  }

};


// module.exports = Scrabble;


var playedWordsArray = []

var Player = function(name = "Player") {
  this.name = name;
};

Player.prototype.plays = function(playedWords){
  if(playedWords != null){
  playedWordsArray = playedWords;
  }
  return playedWordsArray;
};

Player.prototype.play = function(word){
  playedWordsArray.push(word);
  if (this.hasWon) {
    return false;
  } else {
  return playedWordsArray;
  }
};

Player.prototype.totalScore = function(){
  var playedWords = this.plays();
  var total = 0
  for (var n = 0, len = playedWords.length; n < len; n++) {
    total += Scrabble.score(playedWords[n]);
  }
  return total;
};

Player.prototype.hasWon = function(){
  var total = this.totalScore();
  // console.log("has won total is : " + total);
  if (total >= 100){
    return true
  } else {
    return false;
  }
};

Player.prototype.highestScoringWord = function(){
 var playedWords = this.plays();
 var topWord = Scrabble.highestScoreFrom(playedWords);
 return topWord;
}

Player.prototype.highestWordScore = function(){
 topScore = Scrabble.score(this.highestScoringWord());
 return topScore;
}

var playerOne = new Player("Tom");
var array = ["dog", "fkkaaaa", "gdog", "aaaajhd", "aaaaqgg", "cat", "dogdo", "catca"];
console.log(playerOne.name);
playerOne.plays(array);
playerOne.play("cat");
// console.log(playerOne.plays(array));
playerOne.play("dog");
// console.log(playerOne.plays(array));
// console.log("test " + Scrabble.highestScoreFrom(array));


console.log(playerOne.totalScore());
// console.log(Scrabble.score("angry"));
console.log("has won??  " + playerOne.hasWon());
console.log(playerOne.highestScoringWord());
console.log(playerOne.highestWordScore());
