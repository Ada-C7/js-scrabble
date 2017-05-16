//constructor
var Scrabble = function() {
};

// YOUR CODE HERE
Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

module.exports = Scrabble;
var my_game = new Scrabble()
console.log(my_game.helloWorld());
