// 'use strict';
// var prompt = require('prompt');


var scoreboard = {}; // object, not hash...but similar

var populateScoreboard = function(letters, point) { // letters is an array
  for (var index = 0; index < letters.length; index++) {
    scoreboard[letters[index]] = point; // for every letter given, assign the point value
  }
};

populateScoreboard(["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"], 1);
populateScoreboard(["d", "g"], 2);
populateScoreboard(["b", "c", "m", "p"], 3);
populateScoreboard(["f", "h", "v", "w", "y"],4);
populateScoreboard(["k"], 5);
populateScoreboard(["j", "x"], 8);
populateScoreboard(["q", "z"], 10);



var Scrabble = function() { // this is basically a class
};

Scrabble.prototype = {
  score: function(word) {
    var word_score = 0;
    // for each letter in the word, add points to word_score
    for (var index = 0; index < word.length; index++) { // index is our place in the word
      var letter = word[index]; // this grabs the letter from the word (e.g. "y" from "you")
      word_score += scoreboard[letter];
    }
    // check length of word to see if they get a bonus
    if (word.length == 7) {
      word_score += 50;
    }
    // return total word score
    return word_score;
  },
  highestScore: function(arrayOfWords) {
    var all_words_played = {};
    // add all words played AND their score to object
    for (var index = 0; index < arrayOfWords.length; index++) {
      var word = arrayOfWords[index];
      all_words_played[word] = this.score(word);
    }
    var highest_scoring_words = [];
    var max_score = 0;
    // search object for highest score
      for (var word in all_words_played) {
        var score = all_words_played[word]; // keys are words
        if (score > max_score) {
          max_score = score;
          highest_scoring_words = [word];
        } else if (score == max_score) {
          highest_scoring_words.append(word);
        }
      }
    // if two values are the same (tie)
    if (highest_scoring_words.length > 1) {
      var wordLengths = [];
      // loop that goes through the highest_scoring_words array and puts the lengths into wordLengths
      for (var index = 0; index < highest_scoring_words.length; index++) {
        var word = highest_scoring_words[index]
        wordLengths.append(word.length );
      }
      max_length = 0;
      for (var index = 0; index < wordLengths.length; index++) {
        if (index > max_length) {
          max_length = index;
      } else if (index == max_length) {
          // return the word that came right before it
        }
      }
      // if one of them has 7 letters
      if (word.length == 7) {
        // return that word as the winner
        return word;
      }
    }
    //return winning word
    return highest_scoring_words[0];
  }
};


// code they gave us:
// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
// };
//
// module.exports = Scrabble;
