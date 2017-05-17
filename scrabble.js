var Scrabble = function() { };

Scrabble.myNums =  {
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
    L: 1,
    N: 1,
    R: 1,
    S: 1,
    T: 1,
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10
},

Scrabble.score = function(word) {
    // check that guessed word contains only letters
    var wordScore = 0;
    for (i = 0; i < word.length; i++) {
        letter = word[i].toUpperCase();
        wordScore +=Scrabble.myNums[letter];
    }
    if (word.length == 7) {
        wordScore +=50;
    }
    return wordScore;
},

Scrabble.highestScoreFrom = function(arrayOfWords) {
    var highest = arrayOfWords[0];

    for (var i = 1; i < arrayOfWords.length; i++) {
        var word_score = this.score(arrayOfWords[i]);
        if ( word_score ==  this.score(highest)) {
            if (arrayOfWords[i].length < highest.length){
                highest = arrayOfWords[i];
            } else if (word_score > this.score(highest)) {
                highest = arrayOfWords[i];
            }
        } else if (word_score > this.score(highest)) {
            highest = arrayOfWords[i];
        }

    }
    return highest;
}

Scrabble.prototype = {
};


var Player = function(name) {
    this.name = name;
    // plays returns an array of all the words this player has played
    this.plays = [];


    // hasWon returns true if the player has over 100 points
    this.hasWon = false;
};

Player.prototype = {
    // play(word) adds the input word to the plays array
     play: function(word){
        this.plays.push(word)
    },

    // totalScore() adds the input words
    totalScore: function(plays){
        var total = 0;
        for(var i = 0; i < this.plays.length; i++) {
            var score = Scrabble.score(this.plays[i]);
            // add word and score to wordScoreHash
            total +=score
        }
        if (total >= 100){
            this.hasWon = true;
        }
        return total;
    },
    // highestWordScore  returns the highest scoring word score
    highestWordScore: function() {
        var word = Scrabble.highestScoreFrom(this.plays);
        return Scrabble.score(word)
    },
    // highest scoring word returns highest scoring word that the player has played
    highestScoringWord: function(){
        var top_word = Scrabble.highestScoreFrom(this.plays);
        return top_word
    }
}

var my_game = new Player('alison');
my_game.play('zen');
my_game.play('cat');
my_game.play('qqqqqqqqqqqq');


console.log('This is the total score: ' + my_game.totalScore());
console.log('Has won? ' + my_game.hasWon);
// console.log('This is the top word: ' + my_game.highestScoringWord());
// console.log('This is the high score: ' + my_game.highestWordScore());



// module.exports = Scrabble;
//
