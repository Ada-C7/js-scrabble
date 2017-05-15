var Scrabble = function() { //};
Scrabble.prototype.TILES = {
  A: 1, E: 1, I: 1,O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
  D: 2, G: 2,
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10
};

Scrabble.prototype.score = function(word) {
  var input = word.toUpperCase();
  var total = 0;
  for (var i = 0; i < input.length; i++) {
    var score = this.TILES[input[i]];
    total += score;
  }
  if (input.length === 7) {
    total += 50;
  }
  return total;
};

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  var maxWords = this.findMax(arrayOfWords);
  if (maxWords.length > 1) {
    return tie(maxWords);
  }
  else{
    return maxWords[0];
  }
};

Scrabble.prototype.findMax = function(arrayOfWords){
  var max = 0;
  var maxWords = [];
  for (i=0; i < arrayOfWords.length; i++){
    score =this.score(arrayOfWords[i]);
    if (score == max){
      maxWords.push(arrayOfWords[i]);
    }
    else if (score > max) {
      max = score;
      maxWords = [arrayOfWords[i]];
    }
  }
  return maxWords;
};

Scrabble.prototype.tie = function(maxWords){
  var maxWord = maxWords.filter(function(element){ return element.length == 7; })
  if (maxWord.length == 0) {
    return maxWord[0];
  }
  else {
    maxWord = Scrabble.prototype.minBy(maxWords);
    return maxWord;
  }
};

Scrabble.prototype.minBy = function (array) {
  var result = array.map(function (el) { return el.length; });
  var min = Math.min.apply(null, result);
  return array[result.indexOf(min)];
};
}; // end of Scrabble

var Player = function(name) {
  this.name = name;
  this.plays = [];
};

Player.prototype.play = function(word){
  this.plays.push(word);
  if (this.hasWon() == false){
    return false;
  }
  else {
    return true;
  }
};

Player.prototype.totalScore = function(){
  var total = 0;
  this.plays.forEach(function(word){
    total += Scrabble.prototype.score(word);
  });
  return total;
};

Player.prototype.hasWon = function(){
  if (this.totalScore() > 100){
    return true;
  }
  else {
    return false;
  }
};

Player.prototype.highestScoringWord = function(){
  Scrabble.prototype.highestScoreFrom(this.plays);
};

Player.prototype.highestWordScore = function(){
  Scrabble.prototype.score(Player.prototype.highestScoringWord);
};
//}; // end of Player




// ==================TESTING=========================
var newScrabble = new Scrabble();
var player1 = new Player("Natalia");
console.log("PLayer one name: " + player1.name);
var player2 = new Player("David");
console.log("PLayer one name: " + player2.name);

console.log("Return true if player1 won: " + player1.play("QQQWER"));
console.log("Return true if player2 won: " + player2.play("AQQQWER"));
console.log("Total score of player 1: " + player1.totalScore());
console.log("Total score of player 2: " + player2.totalScore());
console.log("Return true if player1 won: " + player1.play("QQQQWER"));
console.log("Return true if player2 won: " + player2.play("AA"));
console.log("Total score of player 1: " + player1.totalScore());
console.log("Total score of player 2: " + player2.totalScore());

// var word = newScrabble.score("NATA");
// console.log(word);
// var highest = newScrabble.highestScoreFrom(['AEIOUN', 'JQQQQ','STRNLO']);
// console.log(highest);
// var tie1 = newScrabble.tie(['FHVWYAA', 'FHWWYAA']);
// console.log(tie1);
// var max = newScrabble.findMax(['SASASASA', 'STSlRNLUO']);
// console.log(max);

module.exports = Scrabble;
