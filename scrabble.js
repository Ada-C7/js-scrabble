

var Scrabble = function() {
  this.scoreCard = {
    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y"],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q","Z"]
  };

  this.scores = [];
};

// YOUR CODE HERE
Scrabble.prototype = {
  score: function(word) {
    var score = 0;
    word = word.toUpperCase();
    var letters = word.split("");
    letters.forEach(function(letter){
      for(var k in this.scoreCard) {
        if (this.scoreCard[k].indexOf(letter) !== -1) {
          score += parseInt(k);
        }
      }
    }, this);
    return score;
  },
  highestScoreFrom: function(arrayOfWords) {
    this.scores = [];
    arrayOfWords.forEach(function(word) {
      var score = this.score(word);
      this.scores.push(score);
    }, this);

    var maxIndex = this.scores.indexOf(Math.max(...this.scores));
    return arrayOfWords[maxIndex];
  }
};

var Player = function(name) {
  this.name = name;
  this.wordPlays = [];
  this.points = 0;
  this.playerScrabble = new Scrabble();
};

Player.prototype = {
  plays: function() {
    return this.wordPlays;
  },

  play: function(word) {
    this.wordPlays.push(word);
  },

  totalScore: function() {
    this.wordPlays.forEach(function(word) {
      this.points += this.playerScrabble.score(word);
    }, this);

    return this.points;
  },

  hasWon: function() {

    return (this.points > 100 ? true : false);

  },

  highestScoringWord: function() {
    return this.playerScrabble.highestScoreFrom(this.wordPlays);
  },

  highestWordScore: function() {
    var word = this.highestScoringWord();
    return this.playerScrabble.score(word);
  }
};

player = new Player("ada");
console.log(player.playerScrabble.scoreCard);
console.log(player.play("elephant"));
console.log(player.play("carrot"));
console.log(player.plays());
console.log(player.totalScore());
console.log(player.hasWon());
console.log(player.highestScoringWord());
console.log(player.highestWordScore());

module.exports = Scrabble;
