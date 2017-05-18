var Scrabble = require("scrabble");

var Player = function(name) {
  this.name = name;
  this.plays = [];
  this.scrabble = new Scrabble();
};
