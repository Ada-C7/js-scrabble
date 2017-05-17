var Scrabble = function() {
  tile_scores = {
    "a": 1,
    "e": 1,
    "i": 1,
    "o": 1,
    "u": 1,
    "l": 1,
    "n": 1,
    "r": 1,
    "s": 1,
    "t": 1,
    "d": 2,
    "g": 2,
    "b": 3,
    "c": 3,
    "m": 3,
    "p": 3,
    "f": 4,
    "h": 4,
    "v": 4,
    "w": 4,
    "y": 4,
    "k": 5,
    "j": 8,
    "x": 8,
    "q": 10,
    "z": 10,
  }
};

// could also do Scrabble.prototype.scoreWord = function(word) {
Scrabble.prototype = {
  scoreWord: function(word) { var score = 0,
    word_length = word.length

    for(var i = 0; i < word_length; i++)
    score += tile_scores[word.charAt(i)];

    if (word_length == 7) {
      score += 50;
    }
    // console.log(score)
    return score
  },

  highestScoreFrom: function(arrayOfWords) {
    var highest_scored_word = 0
    var highest_scored_word_length = highest_scored_word.length
    var self = this
    arrayOfWords.forEach(function(word) {
      if (self.scoreWord(word) == self.scoreWord(highest_scored_word)) {
        var current_word_length = word.length
        if (highest_scored_word_length == current_word_length) {
          highest_scored_word = highest_scored_word
        } else if (highest_scored_word_length > current_word_length) {
          highest_scored_word = word
        } else if (highest_scored_word_length == 7) {
          highest_scored_word = highest_scored_word
        }
      }
      else if (self.scoreWord(word) >= self.scoreWord(highest_scored_word)) {
        highest_scored_word = word;
      }
    })
    console.log(highest_scored_word)
    return highest_scored_word
  }

};

//second option

// var scoreHash = {}
// // var self = this
// arrayOfWords.forEach(function(word) {
//   scoreHash[word] = Scrabble.prototype.scoreWord(word)
// })
// // console.log(scoreHash)
// return


var gameOne = new Scrabble
gameOne.scoreWord("yes")
gameOne.highestScoreFrom(["yes", "no", "qqqqqqq", "zzzzzzz" ])
// console.log(gameOne)

module.exports = Scrabble;
