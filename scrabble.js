var Scrabble = function() {};

// YOUR CODE HERE
Scrabble.prototype = {};

var points = {
  a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10
};

var score = function(word) {
  var total = 0;
  for (i = 0; i < word.length; i++) {
    total += points[word[i]];
  }
  if (word.length >= 7) {
    total += 50;
  }
  return Number(total);
};

var highestScoreFrom = function(words) {
  var max = score(words[0]);
  var maxWord = words[0];
  words.slice(1).forEach(function(word) {
    var scoreWord = score(word);

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
};

Player.prototype = {

  play: function(word) {
    if (!this.hasWon()) {
      this.plays.push(word);
    } else {
      return false;
    }},

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
      total += score(play);
    });
    return total;
    },

  highestScoringWord: function() {
    return highestScoreFrom(this.plays)[0];
  },

  highestWordScore: function() {
    return highestScoreFrom(this.plays)[1];
  }

};

module.exports = Scrabble;
var scrabble = new Scrabble();


var sai = new Player("sai");
console.log(sai.name);
console.log(sai.play("hat"));
console.log("Plays: " + sai.plays);
console.log(sai.play("pet"));
console.log("Plays: " + sai.plays);
console.log("Total score: " + sai.totalScore());

console.log(sai.play("penguin"));
console.log("Plays: " + sai.plays);
console.log("Total score: " + sai.totalScore());

console.log("**********************************");
console.log(sai.play("zzzz"));
console.log("Plays: " + sai.plays);
console.log("Has won? " + sai.hasWon());
console.log("Total score: " + sai.totalScore());

console.log("**********************************");
console.log("Highest scoring word: " + sai.highestScoringWord());

console.log("**********************************");
console.log("Highest score: " + sai.highestWordScore());



console.log(points.a);
console.log(score("hat"));

words = ["cat", "penguin", "horse", "frog", "menguin"];
console.log(words);
console.log(highestScoreFrom(words)[0]);

console.log("---------------------");
console.log("shorter word wins if scores are the same (doe)");
shorties = ["tins", "doe", "it", "to"];
console.log(highestScoreFrom(shorties)[0]);

console.log("---------------------");
console.log("first seven letter word wins (aaaaaad)");
sevens = ["aaaaaad", "zzzzzj", "aaaaatg"];
console.log(highestScoreFrom(sevens)[0]);

console.log("---------------------");
console.log("seven letter word is the tie breaker (aaaaaad)");
oneSeven = ["aaaaaad", "zzzzzj"];
console.log(highestScoreFrom(oneSeven)[0]);
