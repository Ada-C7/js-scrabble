var Dictionary = function() {}

Dictionary.prototype.findWord = function(word) {
  var fs = require('fs');
  var allWords = [];
  var contents = fs.readFileSync('./words.csv', 'utf8')
  allWords = contents.toString().split("\n");
  return allWords.includes(word);
};

console.log(Dictionary.prototype.findWord("aahed"));
console.log(Dictionary.prototype.findWord("poop"));
console.log(Dictionary.prototype.findWord("actinoid"));
console.log(Dictionary.prototype.findWord("zymurgies"));
