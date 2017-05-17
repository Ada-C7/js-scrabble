var Scrabble = function() {};

Scrabble.score = function(word) {

  // TO DO:
  // - error for invalid characters

  if ( typeof(word) !== 'string' || word.length > 7 ) {
    return "Invalid word";
  }

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

Scrabble.highestScoreFrom = function(arrayOfWords) {

  if ( !Array.isArray(arrayOfWords) ) {
    return "Send me an array and we can try this again...";
  }

  var highestScore = 0;
  var winner = undefined;

  arrayOfWords.forEach(function(word) {
    if ( Scrabble.score(word) > highestScore ){
      highestScore = Scrabble.score(word);
      winner = word; }
    else if ( Scrabble.score(word) == highestScore)
      if ( winner.length == 7 || word.length == 7) {
          winner = winner.length <= word.length ? word : winner; }
      else {
        winner = word.length <= winner.length ? winner : word; }
  });

  return highestScore;
};


var myWordsList = ["ostrich", "cat", "whale", "tiger", "flamingo", "zzzzzzzzzzzz"];

console.log(Scrabble.score("hotdog"));
console.log(Scrabble.highestScoreFrom(myWordsList));


// ===============================================================
// WAVE 2

var Player = function(name){
    this.name = name;
    this.words = [];
    this.score = 0;
};

Player.prototype.plays = function() {
  // plays: property which returns an Array of the words played by the player
};

Player.prototype.play = function(word) {
  if ( this.score < 100 ) {
    this.score += Scrabble.score(word); }
  else if ( this.score > 100 ) {
    return false; }
  return this.score
  // play(word): Function which adds the input word to the plays Array
  // Returns false if player has already won
};

Player.prototype.totalScore = function() {
  // totalScore(): Function which sums up and returns the score of the players words
};

Player.prototype.hasWon = function() {
  // hasWon(): Function which returns true if the player has over 100 points, otherwise returns false
};

Player.prototype.highestScoringWord = function() {
  // highestScoringWord(): Function which returns the highest scoring word the user has played
};

Player.prototype.highestWordScore = function() {
  // highestWordScore(): Function which returns the highestScoringWord score
};


var myPlayer = new Player;
console.log(myPlayer.score);
console.log(myPlayer.play("hippie"));
console.log(myPlayer.play("hotdog"));
console.log(myPlayer.play("cat"));


module.exports = Scrabble;
