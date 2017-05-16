// var Scrabble = require('./scrabble');
// var Scrabble = require('./dictionary');
// var Scrabble = require('tilebag');
// var Scrabble = require('player');
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

  for (var i = 0; i < arrayOfWords.length; i++){
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
// ==================PLAYER=========================
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
  if (this.totalScore() >= 100){
    return true;
  }
  else {
    return false;
  }
};

Player.prototype.highestScoringWord = function(){
  var result = Scrabble.prototype.highestScoreFrom(this.plays);
  return result;
};

Player.prototype.highestWordScore = function(){
  var result = Scrabble.prototype.score(this.highestScoringWord());
  return result;
};
// end of Player

// // ==================TILE BAG=========================
var TileBag = function() {
  var notShaffledTiles = ["D","L","S","U","D","L","S","U","D","L","S",
  "U","D","L","S","U","G","G","G","Q","J","K",
  "X","Z","M","B","C","F","H","V","W","Y","P",
  "M","B","C","F","H","V","W","Y","P","E","E",
  "E","E","E","E","E","E","E","E","E","E","I",
  "I","I","I","I","I","I","I","I","O","O","O",
  "O","O","O","O","O","R","R","R","R","R","R",
  "T","T","T","T","T","T","N","N","N","N","N",
  "N"];
  this.tileBag = TileBag.prototype.shuffleBag(notShaffledTiles);
};

TileBag.prototype.shuffleBag = function(array){
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

TileBag.prototype.drawTiles = function(number){
  var drawnTiles = [];
  for(var i = 0; i < number; i++){
    drawnTiles.push(this.tileBag.shift());
  }
  return drawnTiles;
};

TileBag.prototype.tilesRemaining = function(){
  return this.tileBag;
};

// ==================DICTIONARY=========================

var Dictionary = function() {
  var fs = require("fs");
  var text = fs.readFileSync("words.txt");
  text = text.toString();
  this.words = text.split("\n");
};

Dictionary.prototype.validWord = function(word){
  return this.words.includes(word.toLowerCase());
};

// ==================BOARD=========================
var Board = function() {
  this.board = new Array(15);
  for (var i = 0; i < 15; i++){
    this.board = new Array(15);
  }
  this.board.fill("[ ]");
};

Board.prototype.displayBoard = function(){
  for (var i = 0; i < this.board.length; i++){
    var line = ""
    for (var j = 0; j < this.board.length; j++){
      line += this.board[j];
    }
    console.log(line);
    console.log();
  }
};

Board.prototype.checkWordOnBoard = function(word, row, col, direction){
  var result = false;
  switch (direction){
    case "up":
    result = (row - word.length >= 0) ? true : false
    case "down":
    result = (row + word.length) <= 16 ? true : false
    case "right":
    result = (col + word.length) <= 16 ? true : false
    case "left":
    result = (col - word.length) >= 0 ? true : false
  }
  return result;
};

// ==================TESTING=========================
console.log("======TESTING BOARD======");
var board = new Board();
board.displayBoard();
console.log("======TESTING DICTIONARY======");
var dictionary = new Dictionary();
var result = dictionary.validWord("apple");
console.log("Is apple a valid word for game?" + result);
console.log("======TESTING TILEBAG======");
var newScrabble = new Scrabble();
var tileBag = new TileBag();
console.log("Draw tiles from tile bag: " + tileBag.drawTiles(4));

console.log("======TESTING PLAYER======");
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
console.log("Highest scoring word for player 1: " + player1.highestScoringWord());
console.log("Highest scoring word for player 2: " + player2.highestScoringWord());
console.log("Highest word score for player 1: " + player1.highestWordScore());
console.log("Highest word score for player 2: " + player2.highestWordScore());

console.log("======TESTING SCRABBLE======");
var word = newScrabble.score("NATA");
console.log("Scores for word NATA: " + word);
var highest = newScrabble.highestScoreFrom(['AEIOUN', 'JQQQQ','STRNLO']);
console.log("Highest score from ['AEIOUN', 'JQQQQ','STRNLO']" + highest);
var tie1 = newScrabble.tie(['FHVWYAA', 'FHWWYAA']);
console.log("Check if tie between words with same scores (must select first word) ['FHVWYAA', 'FHWWYAA']: " + tie1);
var max = newScrabble.findMax(['SASASASA', 'STSlRNLUO', "LALALALA"]);
console.log("Find max score between words in array: ['SASASASA', 'STSlRNLUO', 'LALALALA'] " + max);

module.exports = Scrabble;
