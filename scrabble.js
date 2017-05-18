var Scrabble = function() {
  this.letterScores = {
    A: 1, E: 1, I: 1, O: 1, U: 1,
    L: 1, N: 1, R: 1, S: 1, T: 1,
    D: 2, G: 2, B: 3, C: 3, M: 3,
    P: 3, F: 4, H: 4, V: 4, W: 4,
    Y: 4, K: 5, J: 8, X: 8, Q: 10,
    Z: 10
  };
};

// YOUR CODE HERE
Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

Scrabble.prototype.score = function(word) {
  var score = 0;

  for (i = 0; i < word.length; i++) {
    score += this.letterScores[word[i].toUpperCase()];
  }

  if (word.length === 7) {
    score += 50;
  }

  return score;
};

Scrabble.prototype.higherScoreFrom = function(word1, word2) {
  var score1 = this.score(word1);
  var score2 = this.score(word2);

  // In case of tie
  if (score1 === score2) {

    // case where one of the words has a length of 7
    // (first word is chosen if both have a length of 7)
    if (word1.length === 7 || word2.length === 7) {
      return (word1.length === 7) ? word1 : word2;

    // case where neither has a length of 7
    } else {
      minLength = Math.min(word1.length, word2.length);
      return (word1.length === minLength) ? word1 : word2;
    }

  // In the case that there is not a tie
  } else {
    return (score1 > score2) ? word1 : word2;
  }
};

Scrabble.prototype.highestScoreFrom = function(arrayOfWords) {
  var highestScoringWord = arrayOfWords[0];
  var highestScore = this.score(highestScoringWord);
  var currentWord,
      currentScore,
      higherScoringWord;

  for (i = 1; i < arrayOfWords.length; i++) {
    currentWord = arrayOfWords[i];
    currentScore = this.score(currentWord);
    higherScoringWord = this.higherScoreFrom(highestScoringWord, currentWord);

    if (currentWord === higherScoringWord) {
        highestScoringWord = currentWord;
        highestScore = currentScore;
      }
  }

  // Select the highest scoring word from the collection
  return highestScoringWord;
};

module.exports = Scrabble;
