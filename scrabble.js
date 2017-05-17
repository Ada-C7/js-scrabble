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

Scrabble.highestScore = function(arrayOfWords) {
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

        // for (var i = 0; i < arrayOfWords.length; i++) {
        //     var currentScore = this.score(arrayOfWords[i]);
        //     words.push(currentScore);
        //
        //     playedWords[(arrayOfWords[i])] = currentScore;
        // };

    }
    return highest;
}

Scrabble.prototype = {
};

// Scrabble.score('CAT');
// Scrabble.score('puppet');


var wordArray = ['cat', 'dog', 'zen', 'xi'];
var testArray = ['qqqqqqq', 'qqqqqqkk' ];
var testArrayTwo = ['qqqq', 'zzzz'];
console.log(Scrabble.highestScore(testArrayTwo));

// console.log(Scrabble.highestScore(testArray));

// console.log(Scrabble.highestScore(wordArray));

// console.log(Scrabble.myNums.length);



// module.exports = Scrabble;
//
