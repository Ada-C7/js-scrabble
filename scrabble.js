var TileBag = function(){
    this.tiles = ['j','k','q','x','z','b','b','c','c','f','f','h','h','m','m','p','p','v','v','w','w','y','y','g', 'g', 'g', 'd','d', 'd', 'd', 'l', 'l', 'l', 'l', 's','s','s','s','u','u','u','u','n','n','n','n','n','n','r','r','r','r','r','r','t','t','t','t','t','t','o','o','o','o','o','o','o','o','a','a','a','a','a','a','a','a','a','i','i','i','i','i','i','i','i','i','e','e','e','e','e','e','e','e','e','e','e','e']
};
var Game = function(player1, player2) {
    this.player1 = new Player(player1);
    this.player2 = new Player(player2);
    this.tilebag = new TileBag();
    this.turn = 1;
};

Game.prototype = {
    playWord: function(word) {
        if (this.turn == 1) {
            var player = player1;
            // this.player1.prototype.play(word),
            this.turn +=1
        } else {
            var player = player2;
            // this.player.prototype.play(word),
            this.turn -=1
        }
        this.player.prototype.play(word);
    }
};


// Game.drawTile = function(){
//     // figure out how many tiles are needed, if it is the first play, will draw 7
//     // randomly pick out that many tiles and add to player.tiles
        // then need to add stuff to the playWord function to make sure that only letters from tilebag were used
// }
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
    this.plays = [];
    this.hasWon = false;
    // this.tiles = tiles;
};

Player.prototype = {
     play: function(word){
        this.plays.push(word);
        this.deleteTiles(word);
    },

    deleteTiles: function(word) {
        for (var i = 0; i < word.length; i++) {
            player.tiles.remove(word[i])
        }
    },

    totalScore: function(plays){
        var total = 0;
        for(var i = 0; i < this.plays.length; i++) {
            var score = Scrabble.score(this.plays[i]);
            total +=score
        }
        if (total >= 100){
            this.hasWon = true;
        }
        return total;
    },

    highestWordScore: function() {
        var word = Scrabble.highestScoreFrom(this.plays);
        return Scrabble.score(word)
    },

    highestScoringWord: function(){
        var top_word = Scrabble.highestScoreFrom(this.plays);
        return top_word
    }
}

// var my_game = new Player('alison');
// my_game.play('zen');
// my_game.play('cat');
// my_game.play('qqqqqqqqqqqq');
//
// console.log('This is the total score: ' + my_game.totalScore());
// console.log('Has won? ' + my_game.hasWon);
// console.log('This is the top word: ' + my_game.highestScoringWord());
// console.log('This is the high score: ' + my_game.highestWordScore());
// var my_bag = new TileBag();
// console.log(my_bag.tiles);

var new_game = new Game('alison', 'drew');
// console.log(new_game.player1.name);
console.log(new_game.tilebag.tiles);

// module.exports = Scrabble;
//
