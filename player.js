var Scrabble = require("./scrabble");


var Player = function(name) {
  this.name = name;
  this.plays = [];
  this.scrabble = new Scrabble();
};

Player.prototype = {
  play: function(word) {
    // ADD BOOL LOGIC FROM hasWon()
    this.plays.push(word);
  }

};

player1 = new Player("Kerry");
// player1.play("word");
