scoreChart = {
  "a": 1,
  "b": 3,
  "c": 3,
  "d": 2,
  "e": 1,
  "f": 4,
  "g": 2,
  "h": 4,
  "i": 1,
  "j": 8,
  "k": 5,
  "l": 1,
  "m": 3,
  "n": 1,
  "o": 1,
  "p": 3,
  "q": 10,
  "r": 1,
  "s": 1,
  "t": 1,
  "u": 1,
  "v": 4,
  "w": 4,
  "x": 8,
  "y": 4,
  "z": 10,
}

// var Scrabble = function() {
//   this.score()
//   },

//
// var score = function(word) {
//     return totalScore;
// };
// word = ["d", "o", "g"]
// // word = "dog"
// var totalScore = 0;
// word.forEach(function(letter){
//   var letterScore = parseInt(scoreChart.letter);
//   console.log(letterScore) ;
//   // totalScore += letterscore;
//
// });


var word = "dog"
var total = 0
for (var i = 0, len = word.length; i < len; i++) {
  var letterScore = scoreChart[word[i]]
  total += letterScore
  console.log(total) ;
}


      // var Dog = function(name="default name", breed="default breed") {
      //   this.name = name;
      //   this.breed = breed;
      // };
      // Dog.prototype = {
      //   speak: function() {
      //     console.log(this.name + " woof");
      //   }
      // };

// scrabble = new score("test")
// console.log(scrabble);

// ex)
// var values = [8, 5, 3, 10, 14, 2];
//
// values.forEach(function(value){
//   if (value == 10) {
//     console.log("Special case!");
//   }
//   else {
//     console.log("Regular values like " + value);
//   }
// });


// YOUR CODE HERE
// Scrabble.prototype.helloWorld = function() {
//   return 'hello world!';
// };
//
// module.exports = Scrabble;
//
//
//         module.exports = {
//           sayHelloInEnglish: function() {
//             return "HELLO";
//           },
//
//           sayHelloInSpanish: function() {
//             return "Hola";
//           }
//         };
