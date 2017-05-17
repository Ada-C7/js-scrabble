var playedWordsArray = []

var Player = function(name = "Player") {
  this.name = name;
};

Player.prototype.plays = function(playedWords){
  if(playedWords != null){
  playedWordsArray = playedWords;
  }
  return playedWordsArray;
}

Player.prototype.play = function(word){
  playedWordsArray.push(word);
  if (this.hasWon) {
    return false;
  } else {
  return playedWordsArray;
  }
}

Player.prototype.totalScore = function(){

}

Player.prototype.hasWon = function(){

}

Player.prototype.highestScoringWord = function(){

}

Player.prototype.highestWordScore = function(){

}

var playerOne = new Player("Tom");
var array = ["happy", "sad", "angry"];
console.log(playerOne.name);
console.log(playerOne.plays(array));
playerOne.play("cat");
console.log(playerOne.plays(array));
playerOne.play("dog");
console.log(playerOne.plays(array));
