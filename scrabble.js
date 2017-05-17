var Scrabble = function() {};

Scrabble.score = function(word) {

  // TO DO:
  // - error for invalid characters

  if ( typeof(word) !== 'string' || word.length > 7 ) {
    return "Invalid word";
  }

  var wordScore = word.length == 7 ? 50 : 0,
      letterValues = {
        A: 1,   B: 3,   C: 3,   D: 2,
        E: 1,   F: 4,   G: 2,   H: 4,
        I: 1,   J: 8,   K: 5,   L: 1,
        M: 3,   N: 1,   O: 1,   P: 3,
        Q: 10,  R: 1,   S: 1,   T: 1,
        U: 1,   V: 4,   W: 4,   X: 8,
        Y: 4,   Z: 10
      };

  for ( i = 0; i < word.length; i++ ) {
    letter = word.toUpperCase()[i];
    wordScore += letterValues[letter];
  }

  return wordScore;
};

Scrabble.highestScoreFrom = function(arrayOfWords) {

  if ( !Array.isArray(arrayOfWords) ) {
    return "Send me an array and we can try this again...";
  }

  var highestScore = 0;
  var winner = undefined;

  arrayOfWords.forEach(function(word) {
    if ( Scrabble.score(word) > highestScore ){
      highestScore = Scrabble.score(word);
      winner = word; }
    else if ( Scrabble.score(word) == highestScore)
      if ( winner.length == 7 || word.length == 7) {
          winner = winner.length <= word.length ? word : winner; }
      else {
        winner = word.length <= winner.length ? winner : word; }
  });

  return highestScore;
};

Scrabble.highestScoringWord = function() {
  if ( !Array.isArray(arrayOfWords) ) {
    return "Send me an array and we can try this again...";
  }

  var highestScore = 0;
  var winner = undefined;

  arrayOfWords.forEach(function(word) {
    if ( Scrabble.score(word) > highestScore ){
      highestScore = Scrabble.score(word);
      winner = word; }
    else if ( Scrabble.score(word) == highestScore)
      if ( winner.length == 7 || word.length == 7) {
          winner = winner.length <= word.length ? word : winner; }
      else {
        winner = word.length <= winner.length ? winner : word; }
  });

  return winner;
};


var myWordsList = ["ostrich", "cat", "whale", "tiger", "pig", "zzzzzzz"];
console.log(Scrabble.highestScoreFrom(myWordsList));


// ===============================================================
// WAVE 2

var Player = function(name){
    this.name = name;
    this.plays = [];
};

Player.prototype.play = function(word) {
  if ( !this.hasWon() ){
    this.plays.push(word); }
  else if ( this.totalScore > 100 ) {
    return false; }
  return this.name + " played " + word + ". Words played: " + this.plays;
};

Player.prototype.totalScore = function() {
  var total = 0;

  this.plays.forEach(function(word) {
    total += Scrabble.score(word);
  });

  return total;
};

Player.prototype.hasWon = function() {
  var won = this.score < 100 ? false : true;
  return won;
};

Player.prototype.highestScoringWord = function() {
  return Scrabble.highestScoringWord(this.plays);
};

Player.prototype.highestWordScore = function() {
  return Scrabble.highestScoreFrom(this.plays);
};


var myPlayer = new Player("Mario");
console.log(myPlayer.play("hippie"));
console.log(myPlayer.play("hotdog"));
console.log(myPlayer.play("cat"));
console.log(myPlayer.totalScore());
console.log(myPlayer.plays);
console.log(myPlayer.hasWon());
console.log(myPlayer.highestWordScore());


module.exports = Scrabble;
