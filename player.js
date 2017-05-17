// Create a new Player object. The object should have the following functions:
//
// Constructor: Called when you use new Player(name), sets up an instance with the instance variable name assigned
// name: property which returns the value of the player's name
// plays: property which returns an Array of the words played by the player
// play(word): Function which adds the input word to the plays Array
// Returns false if player has already won
// totalScore(): Function which sums up and returns the score of the players words
// hasWon(): Function which returns true if the player has over 100 points, otherwise returns false
// highestScoringWord(): Function which returns the highest scoring word the user has played
// highestWordScore(): Function which returns the highestScoringWord score
var Player = function(name) {
  this.name = name ;
  this.plays = [];
};

Player.prototype = {
  play: function(word) {
    this.plays.push(word)
  },

};

var gameOne = new Player("fido")
gameOne.play("yep")
console.log(gameOne)
