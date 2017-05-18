var Scrabble = require('./scrabble');
var Player = require('./player');
var Tilebag = require('./tilebag');

describe('Scrabble Test Suite', function () {

  describe('Scrabble score', function () {
    it('scores a word correctly', function () {
      var scrabble = new Scrabble();

      expect(scrabble.score('sandwich')).toEqual(17);
    });

    it('gives 50 bonus points to 7 letter words', function () {
      var scrabble = new Scrabble();

      expect(scrabble.score('aaaaaaa')).toEqual(57);
    });
  });

  describe('Scrabble highestScoreFrom', function () {
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

  describe('Player', function () {
    it('sets up a player with a name and a game', function () {
      var scrabble = new Scrabble();
      var player1 = new Player('Alix', scrabble);

      expect(player1.name).toEqual('Alix');
    });
  });

  describe('Player play', function () {
    it('allows a player to play a word', function () {
      var scrabble = new Scrabble();
      var player1 = new Player('Alix', scrabble);

      player1.play('bacon');
      expect(player1.plays).toEqual(['bacon']);
    });

    it("must return false if a player plays a word after winning", function () {
      var scrabble = new Scrabble();
      var player1 = new Player('Alix', scrabble);

      player1.play('qqqqqqq'); // 120 points
      expect(player1.play('ham')).toEqual(false);
      expect(player1.totalScore()).toEqual(120);
    });
  });

  describe('Player totalScore', function () {
    it("correctly calculates a player's total score", function () {
      var scrabble = new Scrabble();
      var player1 = new Player('Alix', scrabble);

      player1.play('bacon'); // 9 points
      player1.play('ham'); // 8 points
      expect(player1.totalScore()).toEqual(17);
    });
  });

  describe('Player hasWon', function () {
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

  describe('Player highestScoringWord and highestWordScore', function () {
    it("returns a player's highest scoring word", function () {
      var scrabble = new Scrabble();
      var player1 = new Player('Alix', scrabble);

      player1.play('bacon'); // 9 points
      player1.play('ham'); // 8 points
      expect(player1.highestScoringWord()).toEqual('bacon');
      expect(player1.highestWordScore()).toEqual(9);
    });
  });

  describe('Tilebag', function () {
    var targetContents = [
      'A','A','A','A','A','A','A','A','A','B',
      'B','C','C','D','D','D','D','E','E','E',
      'E','E','E','E','E','E','E','E','E','F',
      'F','G','G','G','H','H','I','I','I','I',
      'I','I','I','I','I','J','K','L','L','L',
      'L','M','M','N','N','N','N','N','N','O',
      'O','O','O','O','O','O','O','P','P','Q',
      'R','R','R','R','R','R','S','S','S','S',
      'T','T','T','T','T','T','U','U','U','U',
      'V','V','W','W','X','Y','Y','Z'
    ];

    var tiles = new Tilebag();
    expect(tiles.contents.sort()).toEqual(targetContents);
  });

  describe('Tilebag drawTiles', function () {
    var tiles = new Tilebag();
    var startingTileCount = tiles.contents.length;
    var drawnTiles = tiles.drawTiles(4);
    var finalTileCount = tiles.contents.length;

    expect(drawnTiles.length).toEqual(4);
    expect(finalTileCount).toEqual(startingTileCount - 4);
  });

});
