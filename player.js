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


Player.prototype.highestWordScore = function() {
  return Scrabble.score(this.highestScoringWord());
};


// //Manual testing...
// console.log(Scrabble.score('pizza'));
// console.log(Scrabble.score('coffee'));
// console.log(Scrabble.score('pikkkka'));
// console.log(Scrabble.highestScoreFrom(['pizza', 'coffee', 'fizz','pikkkka', 'pizze']));
// console.log(Scrabble.score('qqqqqq'));
// console.log(Scrabble.score('aaaaaah'));
// console.log(Scrabble.highestScoreFrom(['pizza', 'coffee', 'fizz','aaaaaah', 'qqqqqq',  'pizze',]));
// console.log(Scrabble.highestScoreFrom(['pizza', 'coffee', 'uuuuuuh', 'fizz', 'qqqqqq',  'aaaaaah', 'zzzzzz', 'uuuuuuh' ,'pizze',]));
//
//
//
// var alix = new Player('Alix');
// console.log(alix.name);
// console.log(alix.plays);
// alix.play('happy');
// alix.play('dopey');
// alix.play('sleepy');
// console.log(alix.plays);
// alix.play('zzzzzzz');
// console.log(alix.totalScore());
// console.log(alix.hasWon());
// console.log(alix.highestScoringWord());
// console.log(alix.highestWordScore());
