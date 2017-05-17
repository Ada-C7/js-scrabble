'use strict';
var prompt = require('prompt');

//start the prompt
prompt.start();


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
    var highest_scores = [];
    var max_score = 0;
    // search object for highest score
      for (var word in all_words_played) {
        var score = all_words_played[word]; // keys are words
        if (score > max_score) {
          max_score = score;
          highest_scores = [word];
        } else if (score == max_score) {
          highest_scores.append(word);
        }
      }
    // if two values are the same (tie)
    if (highest_scores.length > 1) {
      var wordLengths = {};
      for (var index = 0; index < highest_scores.length; index++) {
        var word = highest_scores[index]
        wordLengths[word.length] = 1; // we are only using the object for the keys, not the values
        // if words are the same length

        // return the first played
      }
      if (wordLengths.length == 1)
      // if one of them has 7 letters
      if (word.length == 7) {
        // return that word as the winner
        return word;
      }

    }
    //return winning word
    return highest_scores[0];
  }
};

// var calculate = function(error, input) {
//   var play = new Scrabble();
//   play.score(input.word);
// };
//
// prompt.get(["word"], calculate);



// code they gave us:
// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
// };
//
// module.exports = Scrabble;
