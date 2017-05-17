var Scrabble = function() {};

Scrabble.prototype = {
  score: function(word) {
    var values = {
      a: 1,
      e: 1,
      i: 1,
      o: 1,
      u: 1,
      l: 1,
      n: 1,
      r: 1,
      s: 1,
      t: 1,
      d: 2,
      g: 2,
      b: 3,
      c: 3,
      m: 3,
      p: 3,
      f: 4,
      h: 4,
      v: 4,
      w: 4,
      y: 4,
      k: 5,
      j: 8,
      x: 8,
      q: 10,
      z: 10
    };
    var score = 0;

    word = word.toLowerCase();

    for (i = 0; i < word.length; i++) {
      letter = word[i];
      score += values[letter];
    }

    if (word.length >= 7) {
      score += 50;
    }

    return score;
  },

  highestScoreFrom: function(arrayOfWords) {
    var highestWord = arrayOfWords[0];
    var highestScore = this.score(arrayOfWords[0]);

    for (var i = 1; i < arrayOfWords.length; i++) {
      var currentWord = arrayOfWords[i];
      var currentWordScore = this.score(currentWord);

      if (currentWordScore > highestScore) {
        highestScore = currentWordScore;
        highestWord = currentWord;
      } else if (currentWordScore == highestScore){
          if ((currentWord.length == 7 && highestWord.length < 7) || currentWord.length < highestWord.length) {
            highestWord = currentWord;
            highestScore = currentWordScore;
          }
      }
    }
  return highestWord;
  }
};

// testing Scrabble
var test = new Scrabble();
console.log(test.score("zox"));
console.log(test.score("exlax"));
console.log(test.score("Boooooo"));
console.log(test.score("Buuuuuu"));

// should return shortest highest word - zooz
console.log(test.highestScoreFrom(["exlax", "zooz"]));

// if highest word is tie and both have 7 letters, return first booooo.
console.log(test.highestScoreFrom(["Boooooo", "Buuuuuu"]));

var Player = function(name) {
  this.name = name;
  this.plays = [];
};

Player.prototype = {
  play: function(word) {
    if (this.hasWon()) {
      return false;
    } else {
      this.plays.push(word);
    }
  },
  totalScore: function() {
    var wordsPlayed = this.plays;
    var total = 0;
    // iterate through words played
    for (var i = 0; i < wordsPlayed.length; i++) {
      // add up score
      // DOING THIS B/C Score is only avail to game.  Does it matter?
      myGame = new Scrabble();
      total += myGame.score(wordsPlayed[i]);
    }
    // returns total
    return total;
  },
  hasWon: function() {
    if (this.totalScore > 100) {
      return true;
    } else {
      return false;
    }
  },
  highestScoringWord: function() {
    var myGame = new Scrabble();
    return myGame.highestScoreFrom(this.plays);
  },
  highestWordScore : function() {
    var myGame = new Scrabble();
    var word = myGame.highestScoreFrom(this.plays);
    return myGame.score(word);
  }
};

// testing Player
var lynn = new Player("Lynn");
console.log(lynn.name);

// test plays & total score
console.log(lynn.plays);
console.log(lynn.totalScore());
lynn.play("dog");
console.log(lynn.plays);
console.log(lynn.totalScore());
lynn.play("zoo");
console.log(lynn.plays);
console.log(lynn.totalScore());
lynn.play("zaaaaaa");
console.log(lynn.plays);
console.log(lynn.totalScore());

// test highestScoringWord
console.log("HIGHEST SCORING WORD: " + lynn.highestScoringWord());
console.log("HIGHEST SCORING WORD SCORE: " + lynn.highestWordScore());

lynn.play("zoooooo");
console.log(lynn.plays);
console.log(lynn.totalScore());

// test highestScoringWord - should still be zaaaaaa
console.log("HIGHEST SCORING WORD: " + lynn.highestScoringWord());
console.log("HIGHEST SCORING WORD SCORE: " + lynn.highestWordScore());

// test has won?
console.log(lynn.hasWon());

Player.prototype.totalScore = 120;

// test has won when score is over 100
console.log(lynn.hasWon());
// shouldn't be allowed to play a word now
console.log(lynn.play("zoo"));

module.exports = Scrabble;
