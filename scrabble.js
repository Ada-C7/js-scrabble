var Scrabble = function() {};

var scoreChart = {
  'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1,'N': 1, 'R': 1,  'S': 1, 'T': 1,
  'D': 2, 'G': 2,
  'B': 3, 'C': 3, 'M' : 3, 'P' : 3,
  'F': 4, 'H': 4, 'V' : 4, 'W' : 4, 'Y' : 4,
  'K': 5,
  'J': 8, 'X': 8,
  'Q': 10, 'Z': 10
};

Scrabble.prototype = {
  score: function(word) {
    var totalWordScore = 0;
    var lettersArray = word.toUpperCase().split("");

    for (var i = 0; i < lettersArray.length; i++ ) {
      letter = lettersArray[i];
      totalWordScore += scoreChart[letter];
    }

    if (lettersArray.length == 7) {
      totalWordScore += 50;
    }

    return totalWordScore;
  },

  highestScoreFrom: function(arrayOfWords){
    var self = this;

    var scores = arrayOfWords.map(function(thisword){
      return self.score(thisword);
    });

    var max = 0;
    var max_index;

    scores.forEach(function(score, i){
      if (score > max){
        max = score;
        max_index = i;
      }else if (score == max && arrayOfWords[i].length < arrayOfWords[max_index].length){
        max = score;
        max_index = i;
      }
    });
    return arrayOfWords[max_index];
  }
};

var player = function(playerName) {
  this.playerName = playerName;
  this.arrayOfWords = [];
  this.playerTotalPoints = 0;
  this.won = false
};

player.prototype.name = function() {
  return this.playerName
};

player.prototype.wordsPlayed = function() {
  return this.arrayOfWords
};

player.prototype.play = function(word) {
  if (this.won) { return false }
  return this.arrayOfWords.push(word)
};

player.prototype.totalPoints = function(){
  for (var i = 0; i< this.arrayOfWords.length; i++){
    thisScore = ( new Scrabble() ).score(this.arrayOfWords[i])
    this.playerTotalPoints += thisScore
  }
  if (this.playerTotalPoints > 100){
    this.won = true
  }
  return this.playerTotalPoints
};

player.prototype.highestScoringWord = function() {
return( new Scrabble()).highestScoreFrom(this.arrayOfWords)
};

player.prototype.highestWordScore = function(){
  return( new Scrabble()).score(this.highestScoringWord())
};

player.prototype.hasWon = function() {
  return this.won
}

var myScrabble = new Scrabble;
console.log(scoreChart);
console.log(myScrabble.score("BONJOUR"));
console.log(myScrabble.score("turn"));
console.log(myScrabble.highestScoreFrom([ "book","gap", "winner"]));

var emma = new player("Emma")
console.log(emma.name());

console.log(emma.play("puzzle"));
console.log(emma.play("quickly"));
console.log(emma.play("ada"));
console.log(emma.play("plane"));

console.log(emma.wordsPlayed());
console.log(emma.totalPoints());

console.log(emma.hasWon());

module.exports = Scrabble;
