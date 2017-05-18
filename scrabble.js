var Scrabble = {

 scoreChart: {

  "A": 1, "B": 3, "C": 3, "D": 2, "E": 1, "F": 4, "G": 2,
  "H": 4, "I": 1, "J": 8, "K": 5, "L": 1, "M": 3,"N": 1,
  "O": 1, "P": 3, "Q": 10, "R": 1, "S": 1, "T": 1, "U": 1,
  "V": 4,"W": 4, "X": 8, "Y": 4,"Z":10
  },

  score: function(word) {
  var total = 0;
  var scoreChart = this.scoreChart;
  word.split("").forEach(function(letter){
    total +=
    scoreChart[letter.toUpperCase()]
  });
    if (word.length == 7){
       total +=50;
    }
    return total
  },

  highestScoreFrom: function(arrayOfWords) {
  var highestScore = 0;
  var highestWord = "";
  // We add new variable score to refer to score function
  var that = this;
  arrayOfWords.forEach(function(word) {
    if (that.score(word) > highestScore){
      highestScore = that.score(word);
      highestWord = word;
    }

    if (that.score(word) == highestScore){
      if (highestWord.length != 7 && word.length == 7){
        highestWord = word;
        highestScore = that.score(word);
      }

      if (highestWord.length != 7 && word.length != 7 && highestWord.length != word.length){
        if (word.length < highestWord.length) {
          highestWord = word;
          highestScore = that.score(word);
        }
      }
    }
  });
  return highestWord;
  },
};

var Player = function(name) {
  this.name = name;
  this.plays = [];
};

Player.prototype = {
  play: function(word) {
    this.plays.push(word);
    if( this.hasWon() ) { return false; }
  },

  totalScore: function() {
    var total = 0;
    this.plays.forEach(function(word) {
      total += Scrabble.score(word);
    });
    return total;
  },

  hasWon: function() {
    if (this.totalScore() > 100) {
      return true;
    } else {
      return false;
    }
  }
};

Player.prototype.highestScoringWord = function() {
  return Scrabble.highestScoreFrom(this.plays);
};

Player.prototype.highestWordScore = function() {
  return Scrabble.score(this.highestScoringWord());
};

player1 = new Player("Rana");
player1.play("hide");
player1.play("pray");
player1.play("write");
player1.play("jump");
console.log(player1.name + " has a total score of " + player1.totalScore() + " points");
console.log(player1.name + " has won? " + player1.hasWon());

module.exports = Scrabble;
