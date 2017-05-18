var Game = function(player1, player2, tileBag) {
  this.tileBag = tileBag; //never figured out how to access this
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype = {};

var TileBag = function() {
  var bag = {
   j: 1, k: 1, q: 1, x: 1, z: 1, b: 2, c: 2, f: 2, h: 2, m: 2, p: 2, v: 2, w: 2, y: 2, g: 3, d: 4, l: 4, s: 4, u: 4, n: 6, r: 6, t: 6, o: 8, a: 9, i: 9, e: 12
  };
 };

TileBag.prototype = {
  //draw: function(num) {
  //remove a tile from this.bag and add it to the player's rack
};

var Scoring = function() {};

var points = {
    a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10
  };


Scoring.score = function(word) {
    var total = 0;
    for (i = 0; i < word.length; i++) {
      total += points[word[i]];
    }
    if (word.length >= 7) {
      total += 50;
    }
    return Number(total);
  };

Scoring.highestScoreFrom = function(words) {
    var max = Scoring.score(words[0]);
    var maxWord = words[0];
    words.slice(1).forEach(function(word) {
      var scoreWord = Scoring.score(word);

      if (scoreWord > max) {
        max = scoreWord;
        maxWord = word;
      } else if (scoreWord == max) {
        if (maxWord.length < 7) {
          if ((word.length > 7) || (word.length < maxWord.length))  {
            max = scoreWord;
            maxWord = word;
          }
        }
      }});
      return [maxWord, max];
  };

var Player = function(name) {
  this.name = name;
  this.plays = [];
  // this is not functional -- this.rack = TileBag.draw(7);
};

Player.prototype = {

  play: function(word) {
    if (!this.hasWon()) {
      this.plays.push(word);
      return "You played: " + word;
    } else {
      return false;
    }
  //remove letters from rack
  // draw tiles to update rack
  },

  hasWon: function() {
    if (this.totalScore() > 100) {
      return true;
    } else {
      return false;
    }
  },

  totalScore: function() {
    var total = 0;
    this.plays.forEach(function(play) {
      total += Scoring.score(play);
    });
    return total;
    },

  highestScoringWord: function() {
    return Scoring.highestScoreFrom(this.plays)[0];
  },

  highestWordScore: function() {
    return Scoring.highestScoreFrom(this.plays)[1];
  }

};


var rory = new Player("rory");
var leela = new Player("leela");
var tiles = new TileBag();

module.exports = Game;
var scrabble = new Game(rory, leela, tiles);

console.log(scrabble.player1.name);
console.log(scrabble.player1.play("hat"));
console.log(scrabble.player1.name + "'s plays: " + scrabble.player1.plays);
console.log("**********************************");

console.log(scrabble.player2.name);
console.log(scrabble.player2.play("pet"));
console.log(scrabble.player2.name + "'s plays: " + scrabble.player2.plays);
console.log(scrabble.player2.name + " total score: " + scrabble.player2.totalScore());

console.log("**********************************");
console.log(scrabble.player2.play("penguin"));
console.log(scrabble.player2.name  + " plays: " + scrabble.player2.plays);
console.log(scrabble.player2.name + " total score: " + scrabble.player2.totalScore());

console.log("**********************************");
console.log(scrabble.player1.play("zzzz"));
console.log(scrabble.player1.name + "'s plays: " + scrabble.player1.plays);
console.log(scrabble.player1.name + " has won? " + scrabble.player1.hasWon());
console.log(scrabble.player1.name + " total score: " + scrabble.player1.totalScore());

console.log("**********************************");
console.log(scrabble.player1.name + " highest scoring word: " + scrabble.player1.highestScoringWord());
console.log(scrabble.player1.name + " highest score: " + scrabble.player1.highestWordScore());



console.log("**************[testing Scoring]*****************");
console.log(Scoring.score("hat"));

words = ["cat", "penguin", "horse", "frog", "menguin"];
console.log(words);
console.log(Scoring.highestScoreFrom(words)[0]);

console.log("---------------------");
console.log("shorter word wins if scores are the same (doe)");
shorties = ["tins", "doe", "it", "to"];
console.log(Scoring.highestScoreFrom(shorties)[0]);

console.log("---------------------");
console.log("first seven letter word wins (aaaaaad)");
sevens = ["aaaaaad", "zzzzzj", "aaaaatg"];
console.log(Scoring.highestScoreFrom(sevens)[0]);

console.log("---------------------");
console.log("seven letter word is the tie breaker (aaaaaad)");
oneSeven = ["aaaaaad", "zzzzzj"];
console.log(Scoring.highestScoreFrom(oneSeven)[0]);
