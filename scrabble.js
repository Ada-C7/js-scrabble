var Scrabble = function() {};

Scrabble.prototype.score = function(word) {

  // TO DO -- Error handling:
  // raise ArgumentError.new("That is not String.") if word.class != String
  // raise ArgumentError.new("That word includes invalid characters!") if !word.match(/^[a-zA-Z]+$/)
  // raise ArgumentError.new("That word is too long! Must be 7 characters or less.") if word.length > 7

  var wordScore = word.length == 7 ? 50 : 0,
      letterValues = {
        A: 1,   B: 3,   C: 3,   D: 2,
        E: 1,   F: 4,   G: 2,   H: 4,
        I: 1,   J: 8,   K: 5,   L: 1,
        M: 3,   N: 1,   O: 1,   P: 3,
        Q: 10,  R: 1,   S: 1,   T: 1,
        U: 1,   V: 4,   W: 4,   X: 8,
        Y: 4,   Z: 10
      };

  for ( i = 0; i < word.length; i++ ) {
    letter = word.toUpperCase()[i];
    wordScore += letterValues[letter];
  }

  return wordScore;
};


Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {

  // TO DO -- Error Handling:
  // make sure input is actually an array

  var highestScore = undefined;
};

// raise ArgumentError.new("That's not an array") if array_of_words.class != Array
// winner = ""
//
// highest_score = 0
// array_of_words.each do |word|
//   word_score = self.score(word)
//   if word_score > highest_score
//     highest_score = word_score
//     winner = word
//   elsif word_score == highest_score
//     self.tiebreaker(word, winner)
//   end
// end
//
// return winner
//
//
// STARTED BUT DIDN'T FINISH
//
// word_scores = array_of_words.map { | word | self.score(word) }
//
// word_plus_score = array_of_words.zip(word_scores).to_h
//
// max_score_count = word_plus_score.values.count(word_plus_score.values.max)
//
// tiebreaker if max_score_count > 1
//
// winning_score = word_plus_score.max_by { | word, score | score }[1]
// winning_word = word_plus_score.max_by { | word, score | score }[0]


Scrabble.prototype.tieBreaker = function(word1, word2) {
//   if winner.length == 7 || word.length == 7
//   winner.length <= word.length ? tie_winner = word : tie_winner = winner
// else
//   word.length <= winner.length ? tie_winner = winner : tie_winner = word
// end
};

myGame = new Scrabble();

// var myWordsList = ["ostrich", "badger", "whale", "tiger", "flamingo"];
// console.log(myGame.highestScoreFrom(myWordsList));

console.log(myGame.score("hippo"));

// ===============================================================
// WAVE 2

// Create a new Player object. The object should have the following functions:
//
// Constructor: Called when you use new Player(name),
// sets up an instance with the instance variable name assigned
// name: property which returns the value of the player's name
// plays: property which returns an Array of the words played by the player
// play(word): Function which adds the input word to the plays Array
// Returns false if player has already won
// totalScore(): Function which sums up and returns the score of the players words
// hasWon(): Function which returns true if the player has over 100 points, otherwise returns false
// highestScoringWord(): Function which returns the highest scoring word the user has played
// highestWordScore(): Function which returns the highestScoringWord score

// var Player = function(name){
//     this.name = name;
// };

module.exports = Scrabble;
