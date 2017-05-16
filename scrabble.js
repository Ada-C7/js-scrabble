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

module.exports = Scrabble; // starter code

// initiate new Scrabble object
var my_game = new Scrabble();

// print out results of single word score
console.log(my_game.score("zzz"));
