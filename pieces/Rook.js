//for the color true=white false=black
export default class Rook {
  constructor(square, color) {
    (this.currentSquare = square), (this.color = color);
    this.image = color
      ? `<img class="piece white-piece" src="./pieces/images/white-rook.svg"/>`
      : `<img class="piece black-piece" src="./pieces/images/black-rook.svg"/>`;
    this.prevSquare = "";
  }
  //pos=[x,y] ocupied=false or true up on the board is - in the list
  possibleMoves(board) {
    let possibleMoves = [];
    let counter = 0;
    let switch1 = true;
    let switch2 = true;
    let switch3 = true;
    let switch4 = true;
    for (let i = this.currentSquare[1]; i < board.length - 1; i++) {
      counter++;
      console.log("rigth");
      if (
        this.currentSquare[1] + counter < board.length - 1 &&
        board[this.currentSquare[0]][this.currentSquare[1] + counter][0]
      ) {
        if (
          board[this.currentSquare[0]][this.currentSquare[1] + counter][0]
            .color !== this.color
        ) {
          if (switch1) {
            possibleMoves.push([
              this.currentSquare[0],
              this.currentSquare[1] + counter,
            ]);
          }
        }
        switch1 = false;
      }
      if (switch1) {
        possibleMoves.push([
          this.currentSquare[0],
          this.currentSquare[1] + counter,
        ]);
      }
    }
    counter = 0;
    for (let i = 0; i < this.currentSquare[1]; i++) {
      counter++;
      console.log("left");
      if (
        this.currentSquare[1] - counter < board.length - 1 &&
        board[this.currentSquare[0]][this.currentSquare[1] - counter][0]
      ) {
        if (
          board[this.currentSquare[0]][this.currentSquare[1] - counter][0]
            .color !== this.color
        ) {
          if (switch2) {
            possibleMoves.push([
              this.currentSquare[0],
              this.currentSquare[1] - counter,
            ]);
          }
        }
        switch2 = false;
      }
      if (switch2) {
        possibleMoves.push([
          this.currentSquare[0],
          this.currentSquare[1] - counter,
        ]);
      }
    }

    counter = 0;
    for (let i = this.currentSquare[0]; i < board.length - 1; i++) {
      counter++;
      if (
        this.currentSquare[0] + counter < board.length - 1 &&
        board[this.currentSquare[0] + counter][this.currentSquare[1]][0]
      ) {
        if (
          board[this.currentSquare[0] + counter][this.currentSquare[1]][0]
            .color !== this.color
        ) {
          if (switch3) {
            possibleMoves.push([
              this.currentSquare[0] + counter,
              this.currentSquare[1],
            ]);
          }
        }
        switch3 = false;
      }
      if (switch3) {
        possibleMoves.push([
          this.currentSquare[0] + counter,
          this.currentSquare[1],
        ]);
      }
    }
    counter = 0;
    for (let i = 0; i < this.currentSquare[0]; i++) {
      counter++;

      if (
        this.currentSquare[0] - counter >= 0 &&
        board[this.currentSquare[0] - counter][this.currentSquare[1]][0]
      ) {
        if (
          board[this.currentSquare[0] - counter][this.currentSquare[1]][0]
            .color !== this.color
        ) {
          if (switch4) {
            possibleMoves.push([
              this.currentSquare[0] - counter,
              this.currentSquare[1],
            ]);
          }
        }
        switch4 = false;
      }
      if (switch4) {
        possibleMoves.push([
          this.currentSquare[0] - counter,
          this.currentSquare[1],
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
}
