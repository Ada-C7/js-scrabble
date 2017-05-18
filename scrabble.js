var Scrabble = function(name) {
  this.name = name;
};

// Scrabble.prototype = {
//   score: function(word) {
//     var scoreChart = new Object;
//       scoreChart[1] = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'];
//       scoreChart[2] = ['D', 'G'];
//       scoreChart[3] = ['3', 'B', 'C', 'M', 'P'];
//       scoreChart[4] = ['F', 'H', 'V', 'W', 'Y'];
//       scoreChart[5] = ['K'];
//       scoreChart[8] = ['J', 'X'];
//       scoreChart[10] = ['Q', 'Z'];
//     var scoreCounter = 0;

Scrabble.score = function(word){
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
  };

  Scrabble.highestScoreFrom = function(arrayOfWords) {
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
  };

  Scrabble.highestWordScore = function(arrayOfWords) {
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
    return highestScore;
  };


console.log(Scrabble.score("ABC"));
// var newGame = new Scrabble("ann");
//
// console.log("ABC:" + newGame.score("ABC"));
// console.log("ZZZ:" + newGame.score("ZZZ"));
// console.log("XXXXX: " + newGame.score("XXXXX"));
// console.log("ZZZZ:" + newGame.score("ZZZZ"));
// console.log("AAAAAAA: " + newGame.score("AAAAAAA"));
//
// console.log(newGame.highestScoreFrom(["ABC", "ZZZ"]));
// console.log(newGame.highestScoreFrom(["ZZZZ", "XXXXX"]));
// console.log(newGame.highestScoreFrom(["AA","ZZZZ", "XXXXX"]));
// console.log(newGame.highestScoreFrom(["AAAAAAA","ZZZZ", "XXXXX"]));
// console.log(newGame.highestScoreFrom(["QQQQ","ZZZZ"]));

module.exports = Scrabble;

// YOUR CODE HERE
Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};


var Player = function(name) {
  this.name = name;
  this.plays = [];
};

Player.prototype = {
  play: function(word) {
    if (this.hasWon() !== true) {
    this.plays[this.plays.length] = word;
  } else {
      return console.log("you've already won");
  }

  },
  totalScore: function() {
    // var game = new Scrabble;
    Scrabble.score = 0;
    for(var i = 0; i < this.plays.length; i++) {
      score = score + game.score(this.plays[i]);
    }
    return score;
  },
  hasWon: function() {
    if (this.totalScore() > 100) {
      return true;
    }
  },
  highestScoringWord: function() {
    // var game = new Scrabble;
    return Scrabble.highestScoreFrom(this.plays);
  },
  highestWordScore: function() {
    // var game = new Scrabble;
    return Scrabble.highestWordScore(this.plays);
  }

};

// player = new Player("Ann");
// player.play("ZZZ");
// console.log(player.plays);
// player.play("ZZZ");
// console.log(player.plays);
// console.log(player.totalScore());
// console.log(player.highestScoringWord());
// console.log(player.highestWordScore());
// player.play("ZZZ");
// console.log(player.plays);
// player.play("ZZZ");
// console.log(player.plays);
// player.play("ZZZ");
// console.log(player.plays);

var TileBag = function() {
  var bag = new Object;
    bag["J"] = 1;
    bag["K"] = 1;
    bag["Q"] = 1;
    bag["X"] = 1;
    bag["Z"] = 1;
    bag["B"] = 2;
    bag["C"] = 2;
    bag["F"] = 2;
    bag["H"] = 2;
    bag["M"] = 2;
    bag["P"] = 2;
    bag["V"] = 2;
    bag["W"] = 2;
    bag["Y"] = 2;
    bag["G"] = 3;
    bag["D"] = 4;
    bag["L"] = 4;
    bag["S"] = 4;
    bag["U"] = 4;
    bag["N"] = 5;
    bag["R"] = 5;
    bag["T"] = 5;
    bag["O"] = 8;
    bag["A"] = 9;
    bag["I"] = 9;
    bag["E"] = 12;
    this.bag = bag;
};


TileBag.prototype = {
  drawTiles: function(letter) {
    for (var key in this.bag) {
      if (letter === key) {
        if (this.bag[letter] > 0) {
          this.bag[letter] -= 1;
        }
        else {
          console.log("not enough tiles for this letter");
        }
      }
    }
  }
};

// var newBag = new TileBag;
// newBag.drawTiles("J");
// console.log(newBag.bag);
// newBag.drawTiles("J");
// console.log(newBag.bag);


function Dictionary() {
  this.words = ["cat", "mouse", "human"];
  // will be some sort of API call
}

Dictionary.prototype.search = function(guess) {
  for(var i = 0; i < this.words.length; i++) {
    if (guess === this.words[i]) {
      return true;
    }
  }
  return false;
};

myDic = new Dictionary;
// console.log(myDic.search("mouse"));
// console.log(myDic.search("baby"));


var Board = function() {
  this.board =
  [
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
    ["_","_","_","_","_","_","_","_","_","_","_","_","_","_","_"],
  ];
};

// position is x and then y, so if given [0,0], equivalent space is
// this.board[0]
Board.prototype.play = function(word, position, direction) {
  // for(var i = 0; i < word.length; i++)
  if (this.board[position[1]-1][position[0]-1] === "_") {
    this.board[position[1]-1][position[0]-1] = "X";
    console.log(this.board);
  }
};
//
// myBoard = new Board;
// myBoard.play("a", [1,1], "up");
// myBoard.play("a", [2,2], "up");
// myBoard.play("a", [3,2], "up");
