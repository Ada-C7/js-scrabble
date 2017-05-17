var Scrabble = require('./scrabble');


var Player = function(name, plays = []) {
  this.name = name;
  this.plays = plays;
};

// Player.prototype = {
//   play: function(word) {
//   this.plays.push(word);
//   }
// };

Player.prototype.play = function(word) {
  this.plays.push(word);
  return this.plays;
};

Player.prototype.totalScore = function() {
  var scoreTally = 0;
  this.plays.forEach(function(word){
      scoreTally += Scrabble.score(word);
  });
  return scoreTally;
};

Player.prototype.hasWon = function() {
  return (this.totalScore() > 100);
};

Player.prototype.highestScoringWord = function() {
    return Scrabble.highestScoreFrom(this.plays);
};

Player.prototype.highestScoringWord = function() {
    return Scrabble.highestScoreFrom(this.plays);
};


// Player.prototype.highestWordScore = function() {
//     return Scrabble.highestScoreFrom(this.plays);
// };



var alix = new Player('Alix');
console.log(alix.name);
console.log(alix.plays);
alix.play('happy');
alix.play('dopey');
alix.play('sleepy');
console.log(alix.plays);
alix.play('zzzzzzz');
console.log(alix.totalScore());
console.log(alix.hasWon());
console.log(alix.highestScoringWord());
