var Scrabble = require('./scrabble');
var Player = require('./player');

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

  it('sets up a player with a name and a game', function () {
    var scrabble = new Scrabble();
    var player1 = new Player('Alix', scrabble);

    expect(player1.name).toEqual('Alix');
  });

  it('allows a player to play a word', function () {
    var scrabble = new Scrabble();
    var player1 = new Player('Alix', scrabble);

    player1.play('bacon');
    expect(player1.plays).toEqual(['bacon']);
  });

  it("correctly calculates a player's total score", function () {
    var scrabble = new Scrabble();
    var player1 = new Player('Alix', scrabble);

    player1.play('bacon'); // 9 points
    player1.play('ham'); // 8 points
    expect(player1.totalScore()).toEqual(17);
  });

  it("shows that a player with over 100 points has won", function () {
    var scrabble = new Scrabble();
    var player1 = new Player('Alix', scrabble);

    player1.play('qqqqqqq'); // 120 points
    expect(player1.totalScore()).toEqual(120);
    expect(player1.hasWon()).toEqual(true);
  });

  it("shows that a player with under 100 points has not won", function () {
    var scrabble = new Scrabble();
    var player1 = new Player('Alix', scrabble);

    player1.play('ham'); // 8 points
    expect(player1.totalScore()).toEqual(8);
    expect(player1.hasWon()).toEqual(false);
  });
});
