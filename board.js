
var Board = function() {
  this.board = new Array(15);
  for (var i = 0; i < 15; i++){
    this.board = new Array(15);
  }
  this.board.fill("[ ]");
};

Board.prototype.displayBoard = function(){
  for (var i = 0; i < this.board.length; i++){
    var line = ""
    for (var j = 0; j < this.board.length; j++){
      line += this.board[j];
    }
    console.log(line);
    console.log();
  }
};

Board.prototype.checkWordOnBoard = function(word, row, col, direction){
  var result = false;
  switch (direction){
    case "up":
    result = (row - word.length >= 0) ? true : false
    case "down":
    result = (row + word.length) <= 16 ? true : false
    case "right":
    result = (col + word.length) <= 16 ? true : false
    case "left":
    result = (col - word.length) >= 0 ? true : false
  }
  return result;
};


module.exports = Board;
