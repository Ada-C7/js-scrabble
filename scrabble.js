var Scrabble = {

  // YOUR CODE HERE
  tiles: {
    A: 1, E: 1, I: 1, O: 1, U: 1, L: 1,  N: 1, R: 1, S: 1, T: 1,
    D: 2, G: 2,
    B: 3, C: 3, M: 3, P: 3,
    F: 4, H: 4, V: 4, W: 4, Y: 4,
    K: 5,
    J: 8, X: 8,
    Q: 10, Z:	10
  },

  score: function(word){
    var wordScore = 0;
    if (word.length > 6) {
      wordScore = 50;
    }
    for (i = 0; i < word.length; i++){
      var letter = word[i].toUpperCase();
      wordScore += this.tiles[letter];
    }
    return wordScore;
  },


  highestScoreFrom: function(arrayOfWords){
    var highestScoringWord = arrayOfWords[0];
    var that = this;
    var highestWordScore = this.score(arrayOfWords[0]);
    arrayOfWords.forEach(function(word){
      if (that.score(word) > highestWordScore){
        highestScoringWord = word;
        highestWordScore = that.score(word);
      }
      else if ( highestWordScore >= 50 && that.score(word) == highestWordScore){
        if (word.length >= 7){
          highestScoringWord = word;
          highestWordScore = that.score(word);
        }
      }
      else if (that.score(word) == highestWordScore){
        if (word.length < highestScoringWord.length){
          highestScoringWord = word;
          highestWordScore = that.score(word);
        }
      }
    });
    return highestScoringWord;
  }
};


//// Player Object
//
var Player = function(name){
  this.name = name;
  this.plays = [];
};

Player.prototype = {
  play: function(word){
    this.plays.push(word);
    if (this.hasWon()){
      return flase;
    }
  },
  totalScore: function(){
    var total = 0;
    this.plays.forEach(function(word){
      total += Scrabble.score(word);
    });
    return total;
  },
  hasWon: function(){
    if(this.totalScore > 100){
      return true;
    } else {
      return false;
    }
  },
  highestScoringWord: function(){
    return Scrabble.highestScoreFrom(this.plays);
  },
  higestWordScore: function(){
    return Scrabble.score(this.highestScoringWord());
  }
};




// //Test
player1 = new Player("Rana");
player1.play("hide");
player1.play("pray");
player1.play("write");
player1.play("jump");
console.log(player1.name + " has a total score of " + player1.totalScore() + " points");
console.log(player1.name + " has won? " + player1.hasWon());
// // var letter = "Q";
// // console.log("This is the title " + tiles[letter]);
// // console.log(score("TEST"));
// console.log(Scrabble.score("TTTTTTTT"));
// // console.log(Scrabble.score("QQQQQJ"));
// // console.log(score("qz"));
// // // console.log(arrayOfWords);
// var array = ["Test", "go"];
//  console.log(Scrabble.highestScoreFrom(array));
// //
// // Scrabble.prototype.helloWorld = function() {
// //   return 'hello world!';
// // };
// var ash = new Player("Ash");
// ash.play("hide");
// console.log(ash.plays);

module.exports = Scrabble;
