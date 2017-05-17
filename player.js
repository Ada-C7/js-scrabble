var Player = function (name, game) {
  this.name = name;
  this.game = game;
  this.plays = [];
};

Player.prototype.play = function (word) {
  this.plays.push(word);
};

module.exports = Player;
