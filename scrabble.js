var Scrabble = function(name) {
  this.name = name;
};

Scrabble.prototype = {
  score: function(word) {
    var scoreChart = new Object;
      scoreChart[1] = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'];
      scoreChart[2] = ['D', 'G'];
      scoreChart[3] = ['3', 'B', 'C', 'M', 'P'];
      scoreChart[4] = ['F', 'H', 'V', 'W', 'Y'];
      scoreChart[5] = ['K'];
      scoreChart[8] = ['J', 'X'];
      scoreChart[10] = ['Q', 'Z'];
    var scoreCounter = 0;


    Object.keys(scoreChart).forEach(function (key) {
      var value = scoreChart[key];
      for(var i = 0; i < word.length; i++) {
        if (value.includes(word[i])) {
          scoreCounter = scoreCounter + Number(key);
        } else { scoreCounter = scoreCounter + 0; }
      }
    });

    if (word.length >= 7) {
      scoreCounter = scoreCounter + 50;
      return scoreCounter;
    }
    else {return scoreCounter;}
  },

  highestScoreFrom: function(arrayOfWords) {
    var index = 0;
    var highestScore = this.score(arrayOfWords[0]);
    for(var i = 1; i < arrayOfWords.length; i++) {
      if (highestScore < this.score(arrayOfWords[i])) {
        highestScore = this.score(arrayOfWords[i]);
        index = i;
      } else if (highestScore == this.score(arrayOfWords[i])) {
          if (arrayOfWords[i-1].length < arrayOfWords[i].length) {
            highestScore = highestScore;
          } else if (arrayOfWords[i-1].length == arrayOfWords[i].length) {
            highestScore = highestScore;
          }
          else {highestScore = this.score(arrayOfWords[i]);
          index = i; }
      } else {
        highestScore = highestScore;
      }
    }
    return arrayOfWords[index];
  }
};


var newGame = new Scrabble("ann");

console.log("ABC:" + newGame.score("ABC"));
console.log("ZZZ:" + newGame.score("ZZZ"));
console.log("XXXXX: " + newGame.score("XXXXX"));
console.log("ZZZZ:" + newGame.score("ZZZZ"));
console.log("AAAAAAA: " + newGame.score("AAAAAAA"));

console.log(newGame.highestScoreFrom(["ABC", "ZZZ"]));
console.log(newGame.highestScoreFrom(["ZZZZ", "XXXXX"]));
console.log(newGame.highestScoreFrom(["AA","ZZZZ", "XXXXX"]));
console.log(newGame.highestScoreFrom(["AAAAAAA","ZZZZ", "XXXXX"]));
console.log(newGame.highestScoreFrom(["QQQQ","ZZZZ"]));



module.exports = Scrabble;

// YOUR CODE HERE
Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};


var Player = function(name) {
  this.name = name;
  this.plays = []
};

Player.prototype = {
  plays:
}
