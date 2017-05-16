
var Scrabble = function() {};
var scoreChart = {
  "a": 1, "b": 3, "c": 3, "d": 2, "e": 1, "f": 4, "g": 2, "h": 4, "i": 1, "j": 8, "k": 5, "l": 1, "m": 3, "n": 1, "o": 1, "p": 3, "q": 10, "r": 1, "s": 1, "t": 1, "u": 1, "v": 4, "x": 8, "y": 4, "z": 10
}

var score = function(word){
  scoreOfWord = 0
  word = word.toLowerCase()
  for (var i = 0; i < word.length; i++)
  scoreOfWord += scoreChart[word.charAt(i)];
  // console.log(scoreOfWord)
  return scoreOfWord
}

var highestScoreFrom = function(arrayOfWords){
  var scoresForArray = [];
  arrayOfWords.forEach(function(word){
    scoresForArray.push(score(word))
    scoreOfWord = 0
  });
  var max_of_array = Math.max.apply(Math, scoresForArray);
  return max_of_array
}

// if two words scores tie return score for word with fewer letters
// if word.length == 7 that words score +50
// if multiple words have same length and score choose word supplied first


// YOUR CODE HERE
// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
// };
//
// module.exports = Scrabble;

// score("MaRiSol")
console.log(highestScoreFrom(["zzz", "zzz", "man"]))
