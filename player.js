

var Scrabble = require('./scoring');
var Player = function(name){
this.name= name;
this.plays = [];
this.hasWon = false;
this.total = [];
this.score = 0;

};

Player.prototype.play = function (word) {
  myTurn = new Scrabble();
this.totalScore();
  if (this.score >= 100) {
    this.hasWon = true;
    var win= "You have won!"
    console.log("You have won" + " total score: " + this.score); win
  }else if (this.score < 100) {
this.total.push(myTurn.score(word));
this.plays.push(word);
}
};

Player.prototype.totalScore = function(){
  var totalScore = 0
  for(var i = 0; i < this.total.length; i++){
    this.score += this.total[i];
  }
};

Player.prototype.highestScoringWord = function () {
  return myTurn.highestWord(this.plays)
};

Player.prototype.highestWordScore = function () {
  var score = myTurn.score(myTurn.highestWord(this.plays));
  return "With a score of "+ score +" the highest scoring word is: " + myTurn.highestWord(this.plays)
};
var playNow = new Player("tehut")
playNow.play("cake");
playNow.play("rice");
playNow.play("wordsmith");
playNow.play("wordsmith");
console.log(playNow.hasWon);
playNow.play("wordsmith");
playNow.play("wordsmith");
console.log(playNow.highestWordScore());
console.log("has "+ playNow.name + " won?  " + playNow.hasWon );
// console.log(playNow.total);
