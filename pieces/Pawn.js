//for the color true=white false=black
export default class Pawn {
  constructor(square, color) {
    (this.currentSquare = square), (this.color = color);
    this.image = color
      ? `<img class="piece white-piece" src="./pieces/images/white-pawn.svg"/>`
      : `<img class="piece black-piece" src="./pieces/images/black-pawn.svg"/>`;
    this.prevSquare = "";
    this.name = "pawn";
  }
  //pos=[x,y] ocupied=false or true up on the board is - in the list
  possibleMoves(board) {
    const possibleMoves = [];
    let counter = 0;
    let switch1 = true;
    let switch2 = true;
    let switch3 = true;
    let switch4 = true;
    const maxSquares = this.prevSquare ? 1 : 2;
    if (this.color) {
      for (let i = 1; i < maxSquares + 1; i++) {
        if (
          this.currentSquare[0] + i < board.length &&
          board[this.currentSquare[0] + i][this.currentSquare[1]].length == 0 &&
          switch1
        ) {
          possibleMoves.push([
            this.currentSquare[0] + i,
            this.currentSquare[1],
          ]);
        } else {
          switch1 = false;
        }
      }

      if (
        this.currentSquare[0] + 1 < board.length &&
        this.currentSquare[1] + 1 < board.length &&
        board[this.currentSquare[0] + 1][this.currentSquare[1] + 1][0] &&
        board[this.currentSquare[0] + 1][this.currentSquare[1] + 1][0].color !==
          this.color
      ) {
        possibleMoves.push([
          this.currentSquare[0] + 1,
          this.currentSquare[1] + 1,
        ]);
      }

      if (
        this.currentSquare[0] + 1 < board.length &&
        this.currentSquare[1] - 1 >= 0 &&
        board[this.currentSquare[0] + 1][this.currentSquare[1] - 1][0] &&
        board[this.currentSquare[0] + 1][this.currentSquare[1] - 1][0].color !==
          this.color
      ) {
        possibleMoves.push([
          this.currentSquare[0] + 1,
          this.currentSquare[1] - 1,
        ]);
      }
    } else {
      for (let i = 1; i < maxSquares + 1; i++) {
        if (
          this.currentSquare[0] - i >= 0 &&
          board[this.currentSquare[0] - i][this.currentSquare[1]].length == 0 &&
          switch1
        ) {
          possibleMoves.push([
            this.currentSquare[0] - i,
            this.currentSquare[1],
          ]);
        } else {
          switch1 = false;
        }
      }

      if (
        this.currentSquare[0] - 1 >= 0 &&
        this.currentSquare[1] - 1 >= 0 &&
        board[this.currentSquare[0] - 1][this.currentSquare[1] - 1][0] &&
        board[this.currentSquare[0] - 1][this.currentSquare[1] - 1][0].color !==
          this.color
      ) {
        possibleMoves.push([
          this.currentSquare[0] - 1,
          this.currentSquare[1] - 1,
        ]);
      }

      if (
        this.currentSquare[0] - 1 >= 0 &&
        this.currentSquare[1] + 1 < board.length &&
        board[this.currentSquare[0] - 1][this.currentSquare[1] + 1][0] &&
        board[this.currentSquare[0] - 1][this.currentSquare[1] + 1][0].color !==
          this.color
      ) {
        possibleMoves.push([
          this.currentSquare[0] - 1,
          this.currentSquare[1] + 1,
        ]);
      }
    }
    if (possibleMoves.length > 0) {
      return possibleMoves;
    } else {
      return false;
    }
  }
  move(pos) {
    this.prevSquare = this.currentSquare;
    this.currentSquare = pos;
  }
  redo() {
    const p = this.currentSquare;
    this.currentSquare = this.prevSquare;
    this.prevSquare = p;
  }
}
/* const ocupied = board[pos[0]][pos[1]][0] ? true : false;
    if (this.prevSquare == "") {
      if (
        (!ocupied &&
          pos[0] + 2 == this.currentSquare[0] &&
          pos[1] == this.currentSquare[1]) ||
        (!ocupied &&
          pos[0] - 2 == this.currentSquare[0] &&
          pos[1] == this.currentSquare[1])
      ) {
        console.log("valid move");
        this.prevSquare = this.currentSquare;
        this.currentSquare = pos;

        return true;
      }
    }
    if (
      (!ocupied &&
        this.color &&
        pos[0] + 1 == this.currentSquare[0] &&
        pos[1] == this.currentSquare[1]) ||
      (!ocupied &&
        !this.color &&
        pos[0] - 1 == this.currentSquare[0] &&
        pos[1] == this.currentSquare[1])
    ) {
      console.log("valid move");
      this.prevSquare = this.currentSquare;
      this.currentSquare = pos;

      return true;
    }
    if (
      (ocupied &&
        this.color &&
        pos[0] + 1 == this.currentSquare[0] &&
        pos[1] - 1 == this.currentSquare[1]) ||
      (ocupied &&
        this.color &&
        pos[0] + 1 == this.currentSquare[0] &&
        pos[1] + 1 == this.currentSquare[1]) ||
      (ocupied &&
        !this.color &&
        pos[0] - 1 == this.currentSquare[0] &&
        pos[1] + 1 == this.currentSquare[1]) ||
      (ocupied &&
        !this.color &&
        pos[0] - 1 == this.currentSquare[0] &&
        pos[1] - 1 == this.currentSquare[1])
    ) {
      console.log("valid attack");
      this.prevSquare = this.currentSquare;
      this.currentSquare = pos;
      return true;
    }
    console.log("invalid");
    return false; }
} */
