var Scrabble = function() {};

var scoreChart = {
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
     Z: 10
};

var score = function(word) {

     if (/[^a-z]/i.test(word) || !(word)) {
          return 'This serves as a gentle reminder that you\'re playing Scrabble. Letters only, please.';
     } else {
          var wordArray = word.toUpperCase().split("");
     }

     var scoreArray = [],
          total = 0,
          packaged = [];

     wordArray.forEach(function(letter){
          scoreArray.push(scoreChart[letter]);
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

var selectHighestScore = function(wordArray) {
      highestScore = [[["a"],1]];

     wordArray.forEach(function(word){
          var packaged =[];
          packaged = score(word);
          console.log(highestScore);

          if (highestScore[0][1] == packaged[1]) {
               highestScore.push(packaged);
          } else if (highestScore[0][1] < packaged[1]) {
               highestScore.splice(-1, 1)
               highestScore.push(packaged);
          }
     });
     return highestScore;
};

// highestScoreFrom(arrayOfWords): returns the word in the array with the highest score.
// Note that it’s better to use fewer tiles, so if the top score is tied between multiple words, pick the one with the fewest letters.
// Note that there is a bonus (50 points) for using all seven letters. If the top score is tied between multiple words and one used all seven letters, choose the one with seven letters over the one with fewer tiles.
// If the there are multiple words that are the same score and same length, pick the first one in supplied list.
wordArray = ['empire', 'strikes', 'back', 'return', 'of', 'the', 'jedi', 'zawisto', 'zawista']

console.log(selectHighestScore(wordArray));


module.exports = Scrabble;
