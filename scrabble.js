// SCRABBLE Constructor
var Scrabble = function() {
};

// SCRABBLE Prototype - function to score a single word
Scrabble.prototype.score = function(word) {

  var scoring_hash = {
    aeioulnrst: 1,
    dg: 2,
    bcmp: 3,
    fhvwy: 4,
    k: 5,
    kx: 8,
    qz: 10,
  };

  // add 50 pts if word length is 7
  var score = 0;
  if (word.length === 7) {
    score += 50;
  }

  // iterate over each char of input word
  // Q: define i in the first time only??
  for (var i = 0; i < word.length; i++) {
    var letter = word[i];
    // iterate over each key of hash
    for (var key in scoring_hash) {
      if (key.includes(letter)) {
        score += scoring_hash[key];
      }
    }
  }
  return score;
};

// SCRABBLE Prototype - function to find max score word in array
Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {

  var high_score = this.score(arrayOfWords[0]);

  // iterate over array of input words to find max score
  for (var i = 0; i < arrayOfWords.length; i++) {
    var word_score = this.score(arrayOfWords[i]);
    if ( word_score > high_score) {
      high_score = word_score;
    }
  }
  // add words with high_score into an array
  var max_words = []; // to hold words with max points
  for (i = 0; i < arrayOfWords.length; i++) {
    if (this.score(arrayOfWords[i]) === high_score) {
      max_words.push(arrayOfWords[i]);
    }
  }
  // return the word with shortest length
  var shortest_word = max_words[0];
  for (i = 0; i < max_words.length; i++) {
    if (max_words[i].length < shortest_word.length) {
      shortest_word = max_words[i];
    }
  }
  return shortest_word;
};

// PLAYER Constructor
var Player = function(name) {
  this.name = name;
  this.plays = new Array; // returns all words played
};

// PLAYER Prototype - function for Player to play(word)
// Player.prototype.play = function(word) {
// ;
// }

// PLAYER Prototype - function to return totalScore()
// Player.prototype.totalScore = function() {
// ;
// }

// PLAYER Prototype - function to show win (T/F)
// Player.prototype.hasWon = function() {
//   if =< 100 points
// }

// PLAYER Prototype - function to return highest WORD
// Player.prototype.highestScoringWord = function() {
// returns one word
// }

// PLAYER Prototype - function to return highest SCORE
// Player.prototype.highestWordScore = function() {
// returns a score
// }

// TILEBAG Constructor
// var TileBag = function() {
//
// }

module.exports = Scrabble; // starter code

/**********************END OF MODULES****************************/

// initiate new Scrabble game
var my_game = new Scrabble();

// print out results of single word score
console.log(my_game.score("zzz"));
console.log(my_game.highestScoreFrom(["aaa", "zzj", "zzx"]));

// print out single player data
var tamiko = new Player("Tamiko");
console.log(tamiko.name);
console.log(tamiko.plays);
