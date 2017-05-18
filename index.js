/*
The convention with Node projects is to use `index.js` as the jumping-off
point for the application. If we were building a larger, more integrated
Scrabble application, we would bring the various modules/objects we made into
this file and kick off whatever functions were necessary to run the app.

We're focusing on learning the module pattern and writing basic JavaScript classes  now, so
we won't be bringing anything into this file. Later, we may make good
use of this file.
*/
var Scrabble = require('./scrabble');
var Player = require('./player');


var scrabble = new Scrabble();
console.log(scrabble.score("cat"));
console.log(scrabble.score("natalia"));
console.log(scrabble.highestScoreFrom(["natalia", "abc", "aaa"]));

var player = new Player("Jamie");
player.play("hi");
player.play("jamie");
player.play("banana");

console.log(player.highestWordScore());
console.log(player.highestScoringWord(["natalia","banana", "chair"]));
