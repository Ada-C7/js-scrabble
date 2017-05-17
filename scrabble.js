scoreChart = {
  "a": 1,
  "b": 3,
  "c": 3,
  "d": 2,
  "e": 1,
  "f": 4,
  "g": 2,
  "h": 4,
  "i": 1,
  "j": 8,
  "k": 5,
  "l": 1,
  "m": 3,
  "n": 1,
  "o": 1,
  "p": 3,
  "q": 10,
  "r": 1,
  "s": 1,
  "t": 1,
  "u": 1,
  "v": 4,
  "w": 4,
  "x": 8,
  "y": 4,
  "z": 10,
}


var score = function(word){
  var total = 0;
  for (var i = 0, len = word.length; i < len; i++) {
    var letterScore = scoreChart[word[i]];
    total += letterScore;
  };
  if (word.length == 7){
    return total + 50;
  } else {
  return total;
  }
};

var highestScoreFrom = function(arrayOfWords){
  var highestScore = 0;
  var scoreArray = []
  var highestScoreArray = [];
  arrayOfWords.forEach(function(word){
    wordScore = score(word);
    scoreArray.push(wordScore);

    if (wordScore > highestScore) {
      highestScore = wordScore;
    }
  });

  scoreArray.forEach(function(score, n){

    if (score == highestScore) {
      highestScoreArray.push(arrayOfWords[n]);
    }
  });

  var winningWord = null
  highestScoreArray.forEach(function(word){
    if(word.length == 7){
      winningWord = word;
      return winningWord;
    }
  })

  if (winningWord == null){
    winningWord = highestScoreArray[0];
  }
  return winningWord;

}

var array = ["dog", "zawn", "gdog", "zzzzzz", "cat", "dogdo", "catca", "vaaaaaa"];
var high = highestScoreFrom(array)
console.log("word is " + high);


// YOUR CODE HERE
// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
// };
//
// module.exports = Scrabble;
//
//
//         module.exports = {
//           sayHelloInEnglish: function() {
//             return "HELLO";
//           },
//
//           sayHelloInSpanish: function() {
//             return "Hola";
//           }
//         };
