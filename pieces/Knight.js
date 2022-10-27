//for the color true=white false=black
export default class Knight {
  constructor(square, color) {
    (this.currentSquare = square), (this.color = color);
    this.image = color
      ? `<img class="piece white-piece" src="./pieces/images/white-knight.svg"/>`
      : `<img class="piece black-piece" src="./pieces/images/black-knight.svg"/>`;
    this.prevSquare = "";
  }
  //pos=[x,y] ocupied=false or true up on the board is - in the list
  possibleMoves(board) {
    const possibleMoves = [];

    //y-up-2 x-up-1
    if (
      (this.currentSquare[0] + 2 < board.length &&
        this.currentSquare[1] + 1 < board.length &&
        board[this.currentSquare[0] + 2][this.currentSquare[1] + 1][0] &&
        board[this.currentSquare[0] + 2][this.currentSquare[1] + 1][0].color !==
          this.color) ||
      (this.currentSquare[0] + 2 < board.length &&
        this.currentSquare[1] + 1 < board.length &&
        board[this.currentSquare[0] + 2][this.currentSquare[1] + 1].length == 0)
    ) {
      possibleMoves.push([
        this.currentSquare[0] + 2,
        this.currentSquare[1] + 1,
      ]);
    }
    //y-up-1 x-up-2
    if (
      (this.currentSquare[0] + 1 < board.length &&
        this.currentSquare[1] + 2 < board.length &&
        board[this.currentSquare[0] + 1][this.currentSquare[1] + 2][0] &&
        board[this.currentSquare[0] + 1][this.currentSquare[1] + 2][0].color !==
          this.color) ||
      (this.currentSquare[0] + 1 < board.length &&
        this.currentSquare[1] + 2 < board.length &&
        board[this.currentSquare[0] + 1][this.currentSquare[1] + 2].length == 0)
    ) {
      possibleMoves.push([
        this.currentSquare[0] + 1,
        this.currentSquare[1] + 2,
      ]);
    }
    //y-down-2 x-down-1
    if (
      (this.currentSquare[0] - 2 >= 0 &&
        this.currentSquare[1] - 1 >= 0 &&
        board[this.currentSquare[0] - 2][this.currentSquare[1] - 1][0] &&
        board[this.currentSquare[0] - 2][this.currentSquare[1] - 1][0].color !==
          this.color) ||
      (this.currentSquare[0] - 2 >= 0 &&
        this.currentSquare[1] - 1 >= 0 &&
        board[this.currentSquare[0] - 2][this.currentSquare[1] - 1].length == 0)
    ) {
      possibleMoves.push([
        this.currentSquare[0] - 2,
        this.currentSquare[1] - 1,
      ]);
    }
    //y-down-1 x-down-2
    if (
      (this.currentSquare[0] - 1 >= 0 &&
        this.currentSquare[1] - 2 >= 0 &&
        board[this.currentSquare[0] - 1][this.currentSquare[1] - 2][0] &&
        board[this.currentSquare[0] - 1][this.currentSquare[1] - 2][0].color !==
          this.color) ||
      (this.currentSquare[0] - 1 >= 0 &&
        this.currentSquare[1] - 2 >= 0 &&
        board[this.currentSquare[0] - 1][this.currentSquare[1] - 2].length == 0)
    ) {
      possibleMoves.push([
        this.currentSquare[0] - 1,
        this.currentSquare[1] - 2,
      ]);
    }
    //y-up-2 x-down-1
    if (
      (this.currentSquare[0] + 2 < board.length &&
        this.currentSquare[1] - 1 >= 0 &&
        board[this.currentSquare[0] + 2][this.currentSquare[1] - 1][0] &&
        board[this.currentSquare[0] + 2][this.currentSquare[1] - 1][0].color !==
          this.color) ||
      (this.currentSquare[0] + 2 < board.length &&
        this.currentSquare[1] - 1 >= 0 &&
        board[this.currentSquare[0] + 2][this.currentSquare[1] - 1].length == 0)
    ) {
      possibleMoves.push([
        this.currentSquare[0] + 2,
        this.currentSquare[1] - 1,
      ]);
    }
    //y-up-1 x-down-2
    if (
      (this.currentSquare[0] + 1 < board.length &&
        this.currentSquare[1] - 2 >= 0 &&
        board[this.currentSquare[0] + 1][this.currentSquare[1] - 2][0] &&
        board[this.currentSquare[0] + 1][this.currentSquare[1] - 2][0].color !==
          this.color) ||
      (this.currentSquare[0] + 1 < board.length &&
        this.currentSquare[1] - 2 >= 0 &&
        board[this.currentSquare[0] + 1][this.currentSquare[1] - 2].length == 0)
    ) {
      possibleMoves.push([
        this.currentSquare[0] + 1,
        this.currentSquare[1] - 2,
      ]);
    }
    //y-down-2 x-up-1
    if (
      (this.currentSquare[0] - 2 >= 0 &&
        this.currentSquare[1] + 1 < board.length &&
        board[this.currentSquare[0] - 2][this.currentSquare[1] + 1][0] &&
        board[this.currentSquare[0] - 2][this.currentSquare[1] + 1][0].color !==
          this.color) ||
      (this.currentSquare[0] - 2 >= 0 &&
        this.currentSquare[1] + 1 < board.length &&
        board[this.currentSquare[0] - 2][this.currentSquare[1] + 1].length == 0)
    ) {
      possibleMoves.push([
        this.currentSquare[0] - 2,
        this.currentSquare[1] + 1,
      ]);
    }
    //y-down-1 x-up-2
    if (
      (this.currentSquare[0] - 1 >= 0 &&
        this.currentSquare[1] + 2 < board.length &&
        board[this.currentSquare[0] - 1][this.currentSquare[1] + 2][0] &&
        board[this.currentSquare[0] - 1][this.currentSquare[1] + 2][0].color !==
          this.color) ||
      (this.currentSquare[0] - 1 >= 0 &&
        this.currentSquare[1] + 2 < board.length &&
        board[this.currentSquare[0] - 1][this.currentSquare[1] + 2].length == 0)
    ) {
      possibleMoves.push([
        this.currentSquare[0] - 1,
        this.currentSquare[1] + 2,
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
