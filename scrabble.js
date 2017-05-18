// SCRABBLE Constructor
var Scrabble = function(){
  this.players = [];
};

// PLAYER Constructor
var Player = function(name) {
  this.name = name;
  this.plays = [];
  this.score = 0;
};

// SCRABBLE Prototype
Scrabble.prototype = {
  //- FUNCTION to add a new player
  addPlayer: function(name) {
    this.players.push(new Player(name));
  },

  //- FUNCTION to score a single word
  scoreWord: function(word) {
    var scoring_hash = {
      aeioulnrst: 1,
      dg: 2,
      bcmp: 3,
      fhvwy: 4,
      k: 5,
      kx: 8,
      qz: 10,
    };

    var score = 0;
    // add 50 pts if word length is 7
    if (word.length === 7) score += 50;

    // iterate over each char of input word -- Q: ok to var i 1st time only??
    for (var i = 0; i < word.length; i++) {
      var letter = word[i];
      // iterate over each key of hash
      for (var key in scoring_hash) {
        if (key.includes(letter)) score += scoring_hash[key];
      }
    }
    return score;
  },

  //- FUNCTION to find max score word in array
  highestScoreFrom: function(arrayOfWords) {
    var high_score = this.scoreWord(arrayOfWords[0]);

    // iterate over array of input words to find max score
    for (var i = 0; i < arrayOfWords.length; i++) {
      var word_score = this.scoreWord(arrayOfWords[i]);
      if ( word_score > high_score) high_score = word_score;
    }
    // add words with high_score into an array
    var max_words = []; // to hold words with max points
    for (i = 0; i < arrayOfWords.length; i++) {
      if (this.scoreWord(arrayOfWords[i]) === high_score) {
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
  },
};

// PLAYER Prototype - function for Player to play(word)
Player.prototype.play = function(word) {
  Scrabble.scoreWord.call(this, word);
};

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
console.log(my_game.scoreWord("zzz"));
console.log(my_game.scoreWord("aaaaaaa"));
console.log(my_game.highestScoreFrom(["aaa", "zzj", "zzx"]));

// print out single player data
var player1 = my_game.addPlayer("Tamiko");
var player2 = my_game.addPlayer("Tofu");
console.log(my_game.players);

console.log(my_game.scoreWord.call(player1, "aaa"));

// console.log(player1.name);
// console.log(player1.plays);
// console.log(player1.play("aaa"));


// console.log(Object.getPrototypeOf(Scrabble));
// console.log(tamiko.score);

// console.log(tamiko.plays);
