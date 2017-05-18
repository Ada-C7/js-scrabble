var Scrabble = function(round) {
     var self = this;
     this.round = 'Round ' + round;
     this.tileBag = {
          // [rank, points, number of tiles]
          A: [1, 1, 9],
          B: [2, 3, 2],
          C: [3, 3, 2],
          D: [4, 2, 4],
          E: [5, 1, 12],
          F: [6, 4, 2],
          G: [7, 2, 3],
          H: [8, 4, 2],
          I: [9, 1, 9],
          J: [10, 8, 1],
          K: [11, 5, 1],
          L: [12, 1, 4],
          M: [13, 3, 2],
          N: [14, 1, 6],
          O: [15, 1, 8],
          P: [16, 3, 2],
          Q: [17, 10, 1],
          R: [18, 1, 6],
          S: [19, 1, 4],
          T: [20, 1, 6],
          U: [21, 1, 4],
          V: [22, 4, 2],
          W: [23, 4, 2],
          X: [24, 8, 1],
          Y: [25, 4, 2],
          Z: [26, 10, 1]
     };
     this.checkWord = function(word) {

          if (/[^a-z]/i.test(word) || !(word) || word.length > 7) {
               return "This serves as a gentle reminder that you're playing Scrabble. Seven letters only, please.";
          } else {
               return word.toUpperCase();
          }
     };
     this.packageWord = function(word) {
          var wordArray = word.split("");

          var scoreArray = [],
               total = 0,
               packaged = [];

          wordArray.forEach(function(letter){
               scoreArray.push(self.tileBag[letter][1]);
          });

          scoreArray.forEach(function(score){
               total += score;
          });

          if (scoreArray.length == 7) {
               total += 50;
          }

          packaged.push(wordArray, total);
          return packaged;
     };
     this.packageHighestScore = function(wordArray) {
           var highestScore = [];


          wordArray.forEach(function(word) {
               var packaged = [];
               packaged = self.packageWord(word);

               console.log(packaged);
               console.log(highestScore);

               if (!highestScore.length) {
                    highestScore = packaged;
               } else if (highestScore[1] == packaged[1]) {
                    if (highestScore[0].length == 7) {
                    } else if (packaged[0].length == 7 && highestScore[0].length < 7) {
                         highestScore = packaged;
                    } else if (highestScore[0].length > packaged[0].length) {
                         highestScore = packaged;
                    } else {
                    }
               } else if (highestScore[1] < packaged[1]) {
                    highestScore = packaged;
               }
          });
          return highestScore;
     };

     this.numberOfPlayers = 0;
     this.players = [];
     this.drawTile = function() {
          tile = Math.floor(Math.random() * 26);
          return tile;
          for(var key in result) {
               if(result.hasOwnProperty(key)) {
                    var value = result[key];
                    if( value != '' ) {
                    } else {
                         console.log('Oops. You made an error. Take it from the top.');
                         return prompt.get(['num1','num2','operation'], calculator)
                    }
               }
          }
     }
     Player = function(name) {
          this.name = name;
     };
     Player.prototype = {
          plays: [],
          play: function(word) {
               if (this.hasWon()) {
                    return false;
               } else {
                    if (self.checkWord(word).length < 8) {
                         this.plays.push(self.checkWord(word));
                    } else {
                         return self.checkWord(word);
                    }
               }
          },
          totalScore: function() {
               var total = 0;

               this.plays.forEach(function(word) {
                    var packaged = [];
                    packaged = self.packageWord(word);
                    total += packaged[1];
               });
               return total;
          },
          hasWon: function() {
               if (this.totalScore() > 100) {
                    return true;
               } else {
                    return false;
               }
          },
          highestScoringWord: function() {
               packaged = self.packageHighestScore(this.plays)
               return packaged[0].join('')
          },
          highestWordScore: function() {
               packaged = self.packageHighestScore(this.plays)
               return packaged[1]
          }
     }
};

Scrabble.prototype = {

     addPlayer: function(name) {
          if (this.numberOfPlayers < 4) {
               // name = prompt( "What's the name of Player #" + (i + 1) + '?'  );
               this.players.push(name = new Player(name));
               this.numberOfPlayers++
               // return console.log( one.players[i].name + " has been added.");
          } else {
               return "This serves as a gentle reminder that you're playing Scrabble. Four players only, please.";
          }
     },
     // getLetterByValue:function(value) {
     //      for( var prop in this ) {
     //           if( this.hasOwnProperty( prop ) ) {
     //                if( this[ prop ] === value )
     //                     return prop;
     //           }
     //      }
     // }
     initialDraw: function() {
          if (this.numberOfPlayers > 1) {
               this.players.forEach(function(player) {
                    this.drawTile;
               });
          } else {
               return "This serves as a gentle reminder that you're playing Scrabble. Minimum two players only, please.";
          };
     }
}

// startGameResponse = prompt( "Would you like to start a new game of Scrabble? (Yes or No)" );
//
// if (startGameResponse.toUpperCase() === 'YES') {
//      var one = new Scrabble(1);
//      playersResponse = prompt( "How many players? (2 - 4)" );
// }
//
// for (var i = 0; i < playersResponse; i++ ) {
//      one.addPlayer();
// }
//
// drawTilesResponse = prompt( "Ready to draw tiles? (Yes or No)" );
//
// if (startGameResponse.toUpperCase() === 'YES') {
//      var one = new Scrabble(1);
//      playersResponse = prompt( "How many players? (2 - 4)" );
// }
//
// for (var i = 0; i < playersResponse; i++ ) {
//      one.addPlayer();
// }

var one = new Scrabble(1);
console.log(one.round);
console.log(one.tileBag);
console.log(one.tileBag['A']);
console.log(one.tileBag['A'][1]);
console.log(one.drawTile());

// one.addPlayer('leia');
// console.log(one.players);
// console.log(one.numberOfPlayers);
// one.addPlayer('darth');
// console.log(one.players);
// console.log(one.numberOfPlayers);
// one.addPlayer('luke');
// console.log(one.players);
// console.log(one.numberOfPlayers);
// one.addPlayer('han');
// console.log(one.players);
// console.log(one.numberOfPlayers);
// console.log(one.addPlayer('chewie'));
// console.log(one.players);
// console.log(one.numberOfPlayers);
// console.log(one.players[0].name);
// one.players[0].play('cracker');
// console.log(one.players[0].plays);
// console.log(one.players[0].totalScore());
// console.log(one.players[0].hasWon());
// console.log(one.players[0].highestScoringWord());
// console.log(one.players[0].highestWordScore());
// var word = 'TONY';
// var wordArray = ['EMPIRE','STRIKES','BACK']
// console.log(one.checkWord(word));
// console.log(one.packageWord(word));
// console.log(one.packageHighestScore(wordArray));


module.exports = Scrabble;
