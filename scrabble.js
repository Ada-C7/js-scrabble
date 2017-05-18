// SCRABBLE Constructor
var Scrabble = function(){
  this.players = [];
};

// SCRABBLE Prototype
Scrabble.prototype = {

  //- FUNCTION to score a single word
  scoreWord: function(str) {
    var scoring_hash = {
      AEIOULNRST: 1,
      DG: 2,
      BCMP: 3,
      FHVWY: 4,
      K: 5,
      JX: 8,
      QZ: 10,
    };

    var word = str.toUpperCase();
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

  maxScore: function(arrayOfWords){
    var high_score = this.scoreWord(arrayOfWords[0]);

    // iterate over array of input words to find max score
    for (var i = 0; i < arrayOfWords.length; i++) {
      var word_score = this.scoreWord(arrayOfWords[i]);
      if ( word_score > high_score) high_score = word_score;
    }

    return high_score;
  },

  //- FUNCTION to find max score word in array
  highestScoreWord: function(arrayOfWords) {
    var max_score = this.maxScore(arrayOfWords);

    // add words with high_score into an array
    var max_words = []; // to hold words with max points
    for (i = 0; i < arrayOfWords.length; i++) {
      if (this.scoreWord(arrayOfWords[i]) === max_score) {
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

module.exports = Scrabble; // starter code

/**********************END OF MODULES****************************/

// initiate new Scrabble game
var my_game = new Scrabble();

// print out results of single word score
console.log(my_game.scoreWord("zzz"));
console.log(my_game.scoreWord("ABC"));
console.log(my_game.scoreWord("aaaaaaa"));
console.log(my_game.highestScoreWord(["aaa", "zzj", "zzx"]));
