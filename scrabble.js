
const SCORECHART = {
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


var Scrabble = function() {};

// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
// };

Scrabble.prototype.score = function(word){
  total_score = 0;
  for(var i = 0; i < word.length; i++){
    total_score += SCORECHART[word[i]];
  }
  if (word.length == 7){
    total_score +=50;
    }
  return total_score;
};


Scrabble.prototype.highestScoreFrom = function(arrayOfWords){
  var self = this;
  return arrayOfWords.reduce(function(winner, element){
      if (self.score(element)> self.score(winner)){
        return element;
      }else if ((self.score(element) == self.score(winner)) &&  (element.length == 7) && (winner.length != 7)){
        return element;
      }else if ((self.score(element) == self.score(winner)) &&  (element.length < winner.length) && (winner.length != 7)){
      return element;
      }else{
        return winner;
      }
    }, "");
  };




module.exports = Scrabble;



var game = new Scrabble();

console.log(game.score('pizza'));
console.log(game.score('pizza'));
console.log(game.score('coffee'));
console.log(game.score('pikkkka'));

console.log(game.highestScoreFrom(['pizza', 'coffee', 'fizz','pikkkka', 'pizze']));
console.log(game.score('qqqqqq'));
console.log(game.score('aaaaaah'));


console.log(game.highestScoreFrom(['pizza', 'coffee', 'fizz','aaaaaah', 'qqqqqq',  'pizze',]));


console.log(game.highestScoreFrom(['pizza', 'coffee', 'uuuuuuh', 'fizz', 'qqqqqq',  'aaaaaah', 'zzzzzz', 'uuuuuuh' ,'pizze',]));
