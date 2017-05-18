var Player = function (name, game) {
  this.name = name;
  this.game = game;
  this.plays = [];
};

Player.prototype.play = function (word) {
  this.plays.push(word);
};

Player.prototype.totalScore = function () {
  var score = 0;
  for (var i = 0; i < this.plays.length; i++) {
    score += this.game.score(this.plays[i]);
  }
  return score;
};

Player.prototype.hasWon = function () {
  return this.totalScore() >= 100;
};

module.exports = Player;
