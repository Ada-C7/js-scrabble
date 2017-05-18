var Scrabble = require('./Scrabble.js')


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
playerOne.play("dog");
// console.log(playerOne.plays(array));


console.log(playerOne.totalScore());
console.log("has won??  " + playerOne.hasWon());
console.log(playerOne.highestScoringWord());
console.log(playerOne.highestWordScore());
