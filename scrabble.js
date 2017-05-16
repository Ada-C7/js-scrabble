var Scrabble = function() {};

// YOUR CODE HERE
Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

Scrabble.prototype = {
  score: function(word){},
  highestScoreFrom: function(arrayOfWords){}
}

module.exports = Scrabble;
var scoreChart = new Object

  scoreChart[1] = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'];
  scoreChart[2] = ['D', 'G'];
  scoreChart[3] = ['3', 'B', 'C', 'M', 'P'];
  scoreChart[4] = ['F', 'H', 'V', 'W', 'Y'];
  scoreChart[5] = ['K'];
  scoreChart[8] = ['J', 'X'];
  scoreChart[10] = ['Q', 'Z']

var score = function(word) {
  for(var i = 0, len = word.length; i < len; i++)

    Object.keys(scoreChart).forEach(function (key) {

      var value = scoreChart[key];
      if value.includes(str[i])
        console.log(key);
        })
      )
    }
