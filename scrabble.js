
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


var Scrabble = function() { // constructor (like a class)
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
        highest_scoring_words.push(word);
      }
    }
    // if two values are the same (tie)
    if (highest_scoring_words.length > 1) {
      var wordLengths = [];
      // loop that goes through the highest_scoring_words array and puts the lengths into wordLengths
      for (index = 0; index < highest_scoring_words.length; index++) {
        word = highest_scoring_words[index];
        wordLengths.push(word.length);
      }
      var allSame = true;
      var max_length = wordLengths[0];

      for (index = 0; index < wordLengths.length; index++) {
        if (wordLengths[index] !== max_length) {
          allSame = false;
        }
      }
      if (allSame) {
        return highest_scoring_words[0];
      }
      for (index = 0; index < highest_scoring_words.length; index++) {
        word = highest_scoring_words[index];
        // if one of them has 7 letters
        if (word.length == 7) {
          return word;
        }
      }
      var minLengthWord = highest_scoring_words[0];
      var minLength = minLengthWord.length; // so that we have an actual minimum length for starting point

      for (index = 0; index < highest_scoring_words.length; index++) {
        word = highest_scoring_words[index];
        if (word.length < minLength) {
          minLength = word.length;
          minLengthWord = word;
        }
      }
      return minLengthWord;
    }
    return highest_scoring_words[0];
  }
};


var Player = function(name) { // constructor
  this.name = name;
  this.plays = [];
};

var playsScores = [];
var totalPoints = 0;
var playerHighestScoringWord = "";
var playerHighestWordScore = 0;

Player.prototype = {
  play: function(word) {
    // if player hasWon == true, return false
    if (this.hasWon() === true) {
      return false;
    }
    if (word !== "" && word.length >= 1) {
      this.plays.push(word);
      var scrabble = new Scrabble();
      var wordScore = scrabble.score(word);
      totalPoints += wordScore;
      return true;
    } else {
      console.log("Error, please enter a word that is at least 1 character long.");
    }
  },
  totalScore: function() {
      return totalPoints;
  },
  hasWon: function() {
    if (totalPoints >= 100) {
      return true;
    }
    return false;
  },
  highestScoringWord: function() {
    var scrabble = new Scrabble();
    var topWord = scrabble.highestScore(this.plays);
    return topWord;
  },
  highestWordScore: function() {
    var word = this.highestScoringWord();
    var scrabble = new Scrabble();
    return scrabble.score(word);
  }
};

var player = new Player("Chantal");
player.play("i");
console.log(player.totalScore());
console.log(player.highestScoringWord());

player.play("love");
console.log(player.totalScore());
console.log(player.highestScoringWord());

player.play("javascript");
console.log(player.totalScore());
console.log(player.highestScoringWord());
console.log(player.highestWordScore());


module.exports = Scrabble;
