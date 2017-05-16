
var Dictionary = function() {
  var fs = require("fs");
  var text = fs.readFileSync("words.txt");
  var result = text.toString();
  this.words = result.split("\n");
};

Dictionary.prototype.validWord = function(word){
  return this.words.includes(word.toLowerCase());
};


module.exports = Dictionary;
