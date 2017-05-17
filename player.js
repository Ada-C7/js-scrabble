

var Player = function(name, game) {
  this.name = name;
  this.game = game;
  this.plays = [];
};

Player.prototype = {
  play: function(word) {
    this.plays.push(word)
  };
  totalScore: function() {
    var score = 0;
    this.plays.forEach(function(word){
      score += this.game.score(word)
    })
  };

  //end
}
