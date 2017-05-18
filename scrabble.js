module.exports =  {

  score: function(word){
    var scoreChart = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10];

    word = word.toUpperCase();

    var points = 0;
    var baseASCII = 65; //ACII value of A
    var tileNum = 7;
    var bonusWordPoints = 50;

    for (i = 0; i < word.length; i++) {
      points += scoreChart[word.charCodeAt(i) - baseASCII];
    }

    if (word.length >= tileNum){
      points += bonusWordPoints;
    }
    return (points);
  },

  highestScoreFrom: function(arrayOfWords) {

    highestScore = 0;
    highestWord = "";

    self = this;

    arrayOfWords.forEach(function(w) {
      if (self.score(w) > highestScore || self.score(w) === highestScore && w.length < highestWord.length )
      {
        highestScore = self.score(w);
        highestWord = w;
      }
    });

    return (highestWord);
  }
};
