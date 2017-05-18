var Scrabble = require('./scrabble');
var TileBag = require('./tilebag');
var util = require('./util');


// CONSTRUCTOR ****************************************************
var Player = function(name) {
  this.name = name;
  this.plays = [];
  this.tiles = [];
  this.scrabble = new Scrabble;
  this.tilebag = new TileBag;
}


// PROTOTYPES ****************************************************
Player.prototype.play = function(word) {
  if (util.stringOK(word)[0] ) {
    if (this.hasWon()) {
      return false;
    } else {
      this.plays.push(word);
    }
  } else {
    return util.stringOK(word)[1] // Error message
  };
};

Player.prototype.totalScore = function() {
  var arrayOfScores =  this.scrabble.createScoreArray(this.plays);
  return util.sum(arrayOfScores)
};

Player.prototype.hasWon = function() {
  return (this.totalScore() > 100) ? true : false;
};

Player.prototype.highestScoringWord = function() {
  return this.scrabble.highestScoredWord(this.plays);
};

Player.prototype.highestWordScore = function() {
  return this.scrabble.score(this.highestScoringWord());
};

// NOT FINISHED
// Player.prototype.drawTiles = function() {
//   var tilesNeeded = 7 - this.tiles.length;
//   var newTiles = this.tilebag.drawTiles(tilesNeeded);
//   this.tilebag.tilebag = this.tilebag.tilebag.concat(newTiles);
//   return this.tilebag.tilebag
// };


// TESTING the OUTPUT ****************************************************

// console.log();
// console.log("***************************");
// console.log("TESTS OF PLAYER");
// var andy = new Player('Andy');
//
// console.log(andy.name);
// console.log(andy.play("aaaaa7"));
// console.log(andy.play([]));
// console.log(andy.play(7));
// console.log(andy.play("aaaaa"));
// console.log(andy.plays);
//
// console.log(andy.play("aaaaaaaa"));
// console.log(andy.plays);
//
// console.log();
// console.log('Has won? ' + andy.hasWon());
// console.log(andy.play("r"));
// console.log(andy.plays);
// console.log(andy.totalScore());
// console.log('Has won? ' + andy.hasWon());
//
// console.log();
// console.log('Has won? ' + andy.hasWon());
// console.log(andy.play("aaaaaaa"));
// console.log(andy.plays);
// console.log(andy.totalScore());
// console.log('Has won? ' + andy.hasWon());
//
// console.log();
// console.log('Has won? ' + andy.hasWon());
// console.log(andy.play("aaaaaa"));
// console.log(andy.plays);
// console.log(andy.totalScore());
// console.log('Has won? ' + andy.hasWon());
//
// console.log();
// console.log('Has won? ' + andy.hasWon());
// console.log(andy.play("aaaaaa"));
// console.log(andy.plays);
// console.log(andy.totalScore());
// console.log('Has won? ' + andy.hasWon());
//
// console.log();
// console.log('Has won? ' + andy.hasWon());
// console.log(andy.play("aaaaaa"));
// console.log(andy.plays);
// console.log(andy.totalScore());
// console.log('Has won? ' + andy.hasWon());
//
// console.log();
// console.log('Has won? ' + andy.hasWon());
// console.log(andy.play("aaaaaa"));
// console.log(andy.plays);
// console.log(andy.totalScore());
// console.log('Has won? ' + andy.hasWon());
//
// console.log();
// console.log('Has won? ' + andy.hasWon());
// console.log(andy.play("aaaaaa"));
// console.log(andy.plays);
// console.log(andy.totalScore());
// console.log('Has won? ' + andy.hasWon());
//
// console.log();
// console.log('Has won? ' + andy.hasWon());
// console.log(andy.play("aaaaaa"));
// console.log(andy.plays);
// console.log(andy.totalScore());
// console.log('Has won? ' + andy.hasWon());
//
// console.log();
// console.log('Has won? ' + andy.hasWon());
// console.log(andy.play("a"));
// console.log(andy.plays);
// console.log(andy.totalScore());
// console.log('Has won? ' + andy.hasWon());
//
// console.log();
// console.log('Has won? ' + andy.hasWon());
// console.log(andy.play("a"));
// console.log(andy.plays);
// console.log(andy.totalScore());
// console.log('Has won? ' + andy.hasWon());
//
// console.log();
// console.log();
// console.log();
// console.log(andy.highestScoringWord());
// console.log(andy.highestWordScore());
