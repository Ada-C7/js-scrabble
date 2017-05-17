var Scrabble = require('./scrabble');

describe('Scrabble Test Suite', function () {
  it('scores a word correctly', function () {
    var scrabble = new Scrabble();

    expect(scrabble.score('sandwich')).toEqual(17);
  });

  it('gives 50 bonus points to 7 letter words', function () {
    var scrabble = new Scrabble();

    expect(scrabble.score('aaaaaaa')).toEqual(57);
  });

  it('chooses the higher scoring word', function () {
    var scrabble = new Scrabble();

    expect(scrabble.highestScoreFrom(['sandwich', 'bacon'])).toEqual('sandwich');
  });

  it('chooses the shorter word when there is a tie', function () {
    var scrabble = new Scrabble();

    expect(scrabble.highestScoreFrom(['w', 'aaaa'])).toEqual('w');
  });

  it('chooses the word with 7 letters if there is a tie', function () {
    var scrabble = new Scrabble();

    expect(scrabble.highestScoreFrom(['aaaaaaf', 'qqqqqq'])).toEqual('aaaaaaf');
  });

  it('chooses the first 7 letter word if there are multiple', function () {
    var scrabble = new Scrabble();

    expect(scrabble.highestScoreFrom(['aaaaaaa', 'eeeeeee']));
  });
});
