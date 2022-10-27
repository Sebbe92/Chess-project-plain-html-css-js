//for the color true=white false=black
export default class King {
  constructor(square, color) {
    (this.currentSquare = square), (this.color = color);
    this.image = color
      ? `<img class="piece white-piece" src="./pieces/images/white-king.svg"/>`
      : `<img class="piece black-piece" src="./pieces/images/black-king.svg"/>`;
    this.prevSquare = "";
  }
  //pos=[x,y] ocupied=false or true up on the board is - in the list
  possibleMoves(board) {
    const possibleMoves = [];

    //y-up
    if (
      (this.currentSquare[0] + 1 < board.length &&
        board[this.currentSquare[0] + 1][this.currentSquare[1]][0] &&
        board[this.currentSquare[0] + 1][this.currentSquare[1]][0].color !==
          this.color) ||
      (this.currentSquare[0] + 1 < board.length &&
        board[this.currentSquare[0] + 1][this.currentSquare[1]].length == 0)
    ) {
      possibleMoves.push([this.currentSquare[0] + 1, this.currentSquare[1]]);
    }
    //y-down
    if (
      (this.currentSquare[0] - 1 >= 0 &&
        board[this.currentSquare[0] - 1][this.currentSquare[1]][0] &&
        board[this.currentSquare[0] - 1][this.currentSquare[1]][0].color !==
          this.color) ||
      (this.currentSquare[0] - 1 >= 0 &&
        board[this.currentSquare[0] - 1][this.currentSquare[1]].length == 0)
    ) {
      possibleMoves.push([this.currentSquare[0] - 1, this.currentSquare[1]]);
    }
    //x-down
    if (
      (this.currentSquare[1] - 1 >= 0 &&
        board[this.currentSquare[0]][this.currentSquare[1] - 1][0] &&
        board[this.currentSquare[0]][this.currentSquare[1] - 1][0].color !==
          this.color) ||
      (this.currentSquare[1] - 1 < board.length - 1 &&
        board[this.currentSquare[0]][this.currentSquare[1] - 1].length == 0)
    ) {
      possibleMoves.push([this.currentSquare[0], this.currentSquare[1] - 1]);
    }
    //x-up
    if (
      (this.currentSquare[1] + 1 < board.length &&
        board[this.currentSquare[0]][this.currentSquare[1] + 1][0] &&
        board[this.currentSquare[0]][this.currentSquare[1] + 1][0].color !==
          this.color) ||
      (this.currentSquare[1] + 1 < board.length &&
        board[this.currentSquare[0]][this.currentSquare[1] + 1].length == 0)
    ) {
      possibleMoves.push([this.currentSquare[0], this.currentSquare[1] + 1]);
    }
    //y-up x-up
    if (
      (this.currentSquare[0] + 1 < board.length &&
        this.currentSquare[1] + 1 < board.length &&
        board[this.currentSquare[0] + 1][this.currentSquare[1] + 1][0] &&
        board[this.currentSquare[0] + 1][this.currentSquare[1] + 1][0].color !==
          this.color) ||
      (this.currentSquare[0] + 1 < board.length &&
        this.currentSquare[1] + 1 < board.length &&
        board[this.currentSquare[0] + 1][this.currentSquare[1] + 1].length == 0)
    ) {
      possibleMoves.push([
        this.currentSquare[0] + 1,
        this.currentSquare[1] + 1,
      ]);
    }
    //y-down x-down
    if (
      (this.currentSquare[0] - 1 >= 0 &&
        this.currentSquare[1] - 1 >= 0 &&
        board[this.currentSquare[0] - 1][this.currentSquare[1] - 1][0] &&
        board[this.currentSquare[0] - 1][this.currentSquare[1] - 1][0].color !==
          this.color) ||
      (this.currentSquare[0] - 1 >= 0 &&
        this.currentSquare[1] - 1 >= 0 &&
        board[this.currentSquare[0] - 1][this.currentSquare[1] - 1].length == 0)
    ) {
      possibleMoves.push([
        this.currentSquare[0] - 1,
        this.currentSquare[1] - 1,
      ]);
    }
    //y-up x-down
    if (
      (this.currentSquare[0] + 1 < board.length &&
        this.currentSquare[1] - 1 < board.length &&
        board[this.currentSquare[0] + 1][this.currentSquare[1] - 1][0] &&
        board[this.currentSquare[0] + 1][this.currentSquare[1] - 1][0].color !==
          this.color) ||
      (this.currentSquare[0] + 1 < board.length &&
        this.currentSquare[1] - 1 < board.length &&
        board[this.currentSquare[0] + 1][this.currentSquare[1] - 1].length == 0)
    ) {
      possibleMoves.push([
        this.currentSquare[0] + 1,
        this.currentSquare[1] - 1,
      ]);
    }
    //y-down x-up
    if (
      (this.currentSquare[0] - 1 >= 0 &&
        this.currentSquare[1] + 1 < board.length &&
        board[this.currentSquare[0] - 1][this.currentSquare[1] + 1][0] &&
        board[this.currentSquare[0] - 1][this.currentSquare[1] + 1][0].color !==
          this.color) ||
      (this.currentSquare[0] - 1 >= 0 &&
        this.currentSquare[1] + 1 < board.length &&
        board[this.currentSquare[0] - 1][this.currentSquare[1] + 1].length == 0)
    ) {
      possibleMoves.push([
        this.currentSquare[0] - 1,
        this.currentSquare[1] + 1,
      ]);
    }
    if (possibleMoves.length > 0) {
      console.log(possibleMoves);
      return possibleMoves;
    } else {
      console.log("no moves");
    }
  }
  move(pos) {
    this.prevSquare = this.currentSquare;
    this.currentSquare = pos;
  }
}
