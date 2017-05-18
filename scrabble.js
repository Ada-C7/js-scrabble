var Scrabble = function() {};

Scrabble.score = function(word) {
  var total = 0;
  var letterValue = {
    A: 1,
    B: 3,
    C: 3,
    D: 2,
    E: 1,
    F: 4,
    G: 2,
    H: 4,
    I: 1,
    J: 8,
    K: 5,
    L: 1,
    M: 3,
    N: 1,
    O: 1,
    P: 3,
    Q: 10,
    R: 1,
    S: 1,
    T: 1,
    U: 1,
    V: 4,
    W: 4,
    X: 8,
    Y: 4,
    Z: 10 };
    word = word.toUpperCase();
    for (var i = 0; i < word.length; i++){
      score = letterValue[word[i]]
      total += score;
    }
    return total;
  };

  Scrabble.highestScoreFrom = function(arrayOfWords){
    var self = this;
    var scores = arrayOfWords.map(function(word){
      return self.score(word);
    })

    var max_score = Math.max(...scores);

    var top_words = [];
    for (var i = 0; i < arrayOfWords.length; i++ ){
      if (scores[i] == max_score){
        top_words.push(arrayOfWords[i]);
      }
    }

    if (top_words.length == 1){
      return top_words[0];
    } else {
      var lengths = top_words.map(function(word){
        return word.length;
      })
      var max_length = Math.max(... lengths);
      var min_length = Math.min(...lengths);
      if (max_length >= 7){
        var tieBreak = min_length;
      };
      var index = lengths.indexOf(tieBreak);
      return top_words[index];
    };
  };

  module.exports = Scrabble;

  var Player = function(name){
    this.name = name;
  }

  Player.prototype = {
    plays: []
  }

  Player.prototype.play = function(word) {
    if (this.hasWon()){
      return false;
    } else {
      this.plays.push(word);
    };
  };

  Player.prototype.totalScore = function(){
    var total = this.plays.reduce(function(sum, word) {
      return sum + Scrabble.score(word);
    }, 0);
    return total;
  };

  Player.prototype.hasWon = function() {
    if (this.totalScore() > 100) {
      return true;
    } else {
      return false;
    };
  };

  Player.prototype.highestScoringWord = function(){
    return Scrabble.highestScoreFrom(this.plays);
  };

  Player.prototype.highestWordScore = function(){
    return Scrabble.score(this.highestScoringWord());
  }

  module.exports = Player;

  var frannie = new Player("Frannie");
  console.log(frannie.name);
  console.log(frannie.plays);
  frannie.play("stress");
  console.log(frannie.plays);
  frannie.play("arbitrary");

  console.log(frannie.plays);
  console.log(frannie.totalScore());
  console.log(frannie.hasWon());
  frannie.play("tappanzee");
  frannie.play("haiku");
  frannie.play("quixotic");
  frannie.play("zamboni");
  frannie.play("heffalump");

  console.log(frannie.totalScore());
  console.log(frannie.hasWon());
  console.log(frannie.highestScoringWord());
  console.log(frannie.highestWordScore());






  //
  //
  //
  //
  // var char = this.word.split("");
  //
  // // console.log(char);
  //
  // for (var key in letterValue){
  //   var value = letterValue[key];
  // }
  //
  //
  // for (var i = 0; i < char.length; i++) {
  //   if (char[i] == key) {
  //     wordScore += value;
  //     return wordScore
  //
  //   }
  //   console.log(wordScore);
  //   console.log(letterValue[key]);
  // }
  //
  // // WORKS
  // //   for (var [k, v] of Object.entries(letterValue)){
  // //     // if (char == [k] )
  // //       // var wordScore += v
  // //       // console.log(wordScore);
  // //        console.log(`key is ${k}. Value is ${v}`);
  // // }
  //
  //
  //
  //
  //
  //   // var value = letterValue[key]
  //   // }
  //
  //
  //
  //
  //   // if (this.word.length == 8) {
  //   //   wordScore += 50;
  //   //   console.log(" word: " + this.word + "  " + "score:" + wordScore);
  //   // }
  //
  //   // iterate through char, if instance of lettervalues, add value to wordscore
  // }
  //
  //
  //
  //
  //
  //
  //
  // var myScrabble = new Scrabble("abc");
  // myScrabble.scoreWord();
  //
  //
  //
  // // }
  // // while(char instanceof letterValue){
  // //   wordScore =
  // // }
  // //
  // //   wordScore = this.word.reduce(function(accum, val) {return accum + letterValue(val);}, 0);
  // //   console.log(wordScore);
  // // }
  // //  letterValue.forEach(function(char){
  // //   while (char == letterValue.letter){
  // //     wordScore += letterValue.score;
  // //   }
  // //   return wordScore;
