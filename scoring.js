var Scrabble = function(){
  this.scoringTable = {
  1: ["A", "E", "I",  "O", "U", "L" ,"N" ,"R", "S", "T"],
  2: ["D" ,"G"],
  3: ["B", "C", "M", "P"],
  4: ["F" ,"H", "V", "W" ,"Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"]}
};


Scrabble.prototype = {
  score: function(word){
    var scoreIt = Array.from(word);
    if (scoreIt.length === 7) {
      var score = 50}
      else if (scoreIt.length != 7) {
      score = 0;}

    for (var i in this.scoringTable){
      this.scoringTable[i].forEach(function(item){
        var count = scoreIt.filter(x=> x.toUpperCase().includes(item));
        if (count.length > 0) {
          score += parseInt(i)* parseInt(count.length);
          // console.log(count.length);
        }
      })
    }
    return score;
  },
  highestWord: function(data){
    var highWord = [""],
     scoreWord = new Scrabble();
    data.forEach(function(word){
// console.log(word);
      if (parseInt(scoreWord.score(word)) > parseInt(scoreWord.score(highWord[highWord.length - 1]))) {
        highWord[0] = word;

      }else if(parseInt(scoreWord.score(word)) === parseInt(scoreWord.score(highWord[highWord.length - 1]))){
          highWord.push(word);

      }

    })
    return highWord[0]
  }
}


module.exports = Scrabble;
