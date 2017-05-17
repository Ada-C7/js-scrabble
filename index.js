var Scrabble = require('./scrabble');
var Dictionary = require('./dictionary');
var TileBag = require('./tilebag');
var Player = require('./player');
var Board = require('./board');

// ==================TESTING=========================
console.log("======TESTING BOARD======");
var board = new Board();
board.displayBoard();

console.log("======TESTING DICTIONARY======");
var dictionary = new Dictionary();
var result = dictionary.validWord("apple");
console.log("Is apple a valid word for game?" + result);
var result = dictionary.validWord("blablabla");
console.log("Is blablabla a valid word for game?" + result);

console.log("======TESTING TILEBAG======");
var newScrabble = new Scrabble();
var tileBag = new TileBag();
console.log("Number of tiles before:" + tileBag.tilesRemaining().length);
console.log("Draw tiles from tile bag: " + tileBag.drawTiles(4));
console.log("Remainiing tiles: " + tileBag.tilesRemaining().length);

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
