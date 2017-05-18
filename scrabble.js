var util = require('./util');


// CONSTRUCTOR ****************************************************
var Scrabble = function() {
  this.scoreTable = {A:1, E:1, I:1, O:1, U:1, L:1, N:1, R:1, S:1, T:1, D:2, G:2, B:3, C:3, M:3, P:3, F:4, H:4, V:4, W:4, Y:4, K:5, J:8, X:8, Q:10, Z:10};
};


// PROTOTYPES ****************************************************
Scrabble.prototype.score = function(word) {
  if (util.stringOK(word)[0]) {
    var wordUpperCase = word.toUpperCase();
    var count = 0;
    word.length === 7 ? count += 50 : count;
    for (var ind = 0; ind < word.length; ind++) {
      count += this.scoreTable[wordUpperCase[ind]];
    };
    return count;
  } else {
    return util.stringOK(word)[1];  // Error message
  };
};

Scrabble.prototype.createScoreArray = function (arrayOfWords) {
  var self = this;
  var scoreArray = arrayOfWords.map(function(x) {return self.score(x);});
  return scoreArray;
};


Scrabble.prototype.highestScoredWords = function (arrayOfWords) {
  var scoreArray = this.createScoreArray(arrayOfWords);
  var wordArray = [];
  var max = Math.max.apply(Math, scoreArray);
  for (var index = 0; index < scoreArray.length; index++) {
    if (scoreArray[index] >= max){
      wordArray.push(arrayOfWords[index]);
    }
  };
  var wordArraySorted = wordArray.sort(function (a, b) {
  return a.length - b.length;
  });
  return wordArraySorted
};


Scrabble.prototype.highestScoredWord = function (arrayOfWords) {
  if (util.arrayOK(arrayOfWords)) {
    return "Something went wrong";
  } else {
    var sortedHighScoreWords = this.highestScoredWords(arrayOfWords);
    var seven = util.findSeven(sortedHighScoreWords);
    if (sortedHighScoreWords.length === 1) {
      return sortedHighScoreWords[0];
    } else if (seven.length >= 1) {
      return seven[0];
    } else {
      return sortedHighScoreWords[0];
    };
  }
};



module.exports = Scrabble;



// TESTING the OUTPUT ****************************************************
console.log();
console.log("***************************");
console.log('TESTS OF SCRABBLE');

/*
var test = new Scrabble;
console.log(test.score());
console.log(test.score(''));
console.log(test.score(['hello']));
console.log(test.score(89));
console.log(test.score('hell089'));
console.log(test.score('hel lo'));
console.log(test.score('hello')); // 8
console.log(test.score('Rainbow')); // 62
console.log(test.score('rainbow')); // 62
console.log(test.score('zzzzzx')); // 58
console.log(test.score('risotdo')); // 58
console.log(test.score('wind')); // 8
console.log(test.score('to')); // 2
console.log(test.score('silly')); // 8
console.log(test.score('max')); // 12
*/




var testArr0 = [];
var testArr1 = ['silly','wind','hello'];
var testArr2 = ['zzzzzx','risotdo'];
var testArr3 = ['max','silly','wind'];
var testArr4 = ['rainbow','hello','risotto','to'];
var test = new Scrabble;
console.log(Array.isArray(test.createScoreArray(testArr0)));
console.log(test.createScoreArray(testArr0).length === 0);
console.log(test.createScoreArray(testArr1));
console.log(test.createScoreArray(testArr4)); // [62 , 8 , 57 , 2]
console.log(test.highestScoredWords(testArr1));
console.log(test.highestScoredWords(testArr4));
