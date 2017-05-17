var prompt = require('prompt');
prompt.start();

var Scrabble = function() {};

var scoreChart = {
     A: 1,
     B: 3,
     C: 3,
     D: 2,
     E: 1,
     F: 4,
     G: 2,
     H: 4,
     I: 1,
     J: 8,
     K: 5,
     L: 1,
     M: 3,
     N: 1,
     O: 1,
     P: 3,
     Q: 10,
     R: 1,
     S: 1,
     T: 1,
     U: 1,
     V: 4,
     W: 4,
     X: 8,
     Y: 4,
     Z: 10
};

var checkWord = function(word) {

     if (/[^a-z]/i.test(word) || !(word) || word.length > 7) {
          return "This serves as a gentle reminder that you're playing Scrabble. Seven letters only, please.";
     } else {
          return word.toUpperCase();
     }
}

var packageWord = function(word) {
     var wordArray = word.split("");

     var scoreArray = [],
          total = 0,
          packaged = [];

     wordArray.forEach(function(letter){
          scoreArray.push(scoreChart[letter]);
     });

     scoreArray.forEach(function(score){
          total += score;
     });

     if (scoreArray.length == 7) {
          total += 50;
     }

     packaged.push(wordArray, total);
     return packaged;
};

var packageHighestScore = function(wordArray) {
      var highestScore = [];


     wordArray.forEach(function(word) {
          var packaged = [];
          packaged = packageWord(word);
          console.log(highestScore);

          if (!highestScore.length) {
               highestScore.push(packaged);
          } else if (highestScore[0][1] == packaged[1]) {
               if (highestScore[0][0].length == 7) {
               } else if (packaged[0].length == 7 && highestScore[0][0].length < 7) {
                    highestScore = [];
                    highestScore.push(packaged);
               } else if (highestScore[0][0].length > packaged[0].length) {
                    highestScore = [];
                    highestScore.push(packaged);
               } else {
               }
          } else if (highestScore[0][1] < packaged[1]) {
               highestScore = [];
               highestScore.push(packaged);
          }
     });
     return highestScore;
};

var Player = function(name) {
     this.name = name;
};

Player.prototype = {
     plays: [],
     play: function(word, checkWord) {
          if (this.hasWon()) {
               return false;
          } else {
               if (checkWord(word).length < 8) {
                    this.plays.push(checkWord(word));
               } else {
                    return checkWord(word);
               }
          }
     },
     totalScore: function() {
          var total = 0;

          this.plays.forEach(function(word) {
               var packaged = [];
               packaged = packageWord(word);
               total += packaged[1];
          });
          return total;
     },
     hasWon: function() {
          if (this.totalScore() > 100) {
               return true;
          } else {
               return false;
          }
     },
     highestScoringWord: function() {
          packaged = packageHighestScore(this.plays)
          return packaged[0][0].join('')
     },
     highestWordScore: function() {
          packaged = packageHighestScore(this.plays)
          return packaged[0][1]
     }
}

var darth = new Player('Darth');

console.log(darth.plays);
var word = 'return'
darth.play(word,checkWord);
var word = 'of'
darth.play(word,checkWord);
var word = 'the'
darth.play(word,checkWord);
var word = 'jedi'
darth.play(word,checkWord);
var word = 'empire'
darth.play(word,checkWord);
var word = 'strikes'
darth.play(word,checkWord);
console.log(darth.plays);
console.log(darth.totalScore());
console.log(darth.hasWon());
var word = 'back'
darth.play(word,checkWord);
console.log(darth.plays);
console.log(darth.totalScore());
console.log(darth.hasWon());
console.log(darth.highestScoringWord());
console.log(darth.highestWordScore());



module.exports = Scrabble;
