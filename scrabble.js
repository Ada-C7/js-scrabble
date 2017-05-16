var Scrabble = function() {};

// YOUR CODE HERE
Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

module.exports = Scrabble;



var score = function(word){
  total_score = 0;
  for(var i = 0; i < word.length; i++){
    total_score += scoringChart[word[i]];
  }
  return total_score;
};


var highestScoreFrom = function(arrayOfWords){
  return arrayOfWords.reduce(function(winner, element){
      if (score(element)> score(winner)) {
        return element;
      }else{
        return winner;
      }
    }, "");
  };


var scoringChart = {
  "a" : 1,
  "b" : 3,
  "c" : 3,
  "d" : 2,
  "e" : 1,
  "f" : 4,
  "g" : 2,
  "h" : 4,
  "i" : 1,
  "j" : 8,
  "k" : 5,
  "l" : 1,
  "m" : 3,
  "n" : 1,
  "o" : 1,
  "p" : 3,
  "q" : 10,
  "r" : 1,
  "s" : 1,
  "t" : 1,
  "u" : 1,
  "v" : 4,
  "w" : 4,
  "x" : 8,
  "y" : 4,
  "z" : 10,
};

console.log(score('pizza'));
console.log(score('coffee'));

console.log(highestScoreFrom(['pizza', 'coffee']));
