// Constructor - Scrabble module
var Scrabble = function() {
};

// Prototype - function to score a single word
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

  var score = 0;
  // iterate over each char of input word
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

// Prototype - function to find max score word in array
Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {

  var high_score = this.score(arrayOfWords[0]);

  // iterate over array of input words to find max score
  for (var i = 0; i < arrayOfWords.length; i++) {
    var word_score = this.score(arrayOfWords[i]);
    if ( word_score > high_score) {
      high_score = word_score;
    }
  };

  // add words with high_score into an array
  var max_words = [];
  for (var i = 0; i < arrayOfWords.length; i++) {
    if (this.score(arrayOfWords[i]) === high_score) {
      max_words.push(arrayOfWords[i]);
    }
  }

  // return the word with shortest length
  var shortest_word = max_words[0];
  for (var i = 0; i < max_words.length; i++)
    if (max_words[i].length < shortest_word.length) {
      shortest_word = max_words[i];
    };
  return shortest_word;
};

var max_score = []; // array to hold max words

module.exports = Scrabble; // starter code

// initiate new Scrabble object
var my_game = new Scrabble();

// print out results of single word score
console.log(my_game.score("zzz"));
console.log(my_game.highestScoreFrom(["aaa", "zzj", "zzx"]));
