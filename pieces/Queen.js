//for the color true=white false=black
export default class Queen {
  constructor(square, color) {
    (this.currentSquare = square), (this.color = color);
    this.image = color
      ? `<img class="piece white-piece" src="./pieces/images/white-queen.svg"/>`
      : `<img class="piece black-piece" src="./pieces/images/black-queen.svg"/>`;
    this.prevSquare = "";
    this.name = "queen";
  }
  //pos=[x,y] ocupied=false or true up on the board is - in the list
  possibleMoves(board) {
    const possibleMoves = [];
    let counter = 0;
    let switch1 = true;
    let switch2 = true;
    let switch3 = true;
    let switch4 = true;
    let switch5 = true;
    let switch6 = true;
    let switch7 = true;
    let switch8 = true;
    for (let i = 0; i <= board.length; i++) {
      counter++;
      if (
        this.currentSquare[0] + counter < board.length &&
        this.currentSquare[1] + counter < board.length
      ) {
        if (
          board[this.currentSquare[0] + counter][
            this.currentSquare[1] + counter
          ][0]
        ) {
          if (
            board[this.currentSquare[0] + counter][
              this.currentSquare[1] + counter
            ][0].color !== this.color
          ) {
            if (switch1) {
              possibleMoves.push([
                this.currentSquare[0] + counter,
                this.currentSquare[1] + counter,
              ]);
            }
          }
          switch1 = false;
        }
        if (switch1) {
          possibleMoves.push([
            this.currentSquare[0] + counter,
            this.currentSquare[1] + counter,
          ]);
        }
      }
      if (
        this.currentSquare[0] + counter < board.length &&
        this.currentSquare[1] - counter >= 0
      ) {
        if (
          board[this.currentSquare[0] + counter][
            this.currentSquare[1] - counter
          ][0]
        ) {
          if (
            board[this.currentSquare[0] + counter][
              this.currentSquare[1] - counter
            ][0].color !== this.color
          ) {
            if (switch2) {
              possibleMoves.push([
                this.currentSquare[0] + counter,
                this.currentSquare[1] - counter,
              ]);
            }
          }
          switch2 = false;
        }
        if (switch2) {
          possibleMoves.push([
            this.currentSquare[0] + counter,
            this.currentSquare[1] - counter,
          ]);
        }
      }
      if (
        this.currentSquare[0] - counter >= 0 &&
        this.currentSquare[1] + counter < board.length
      ) {
        if (
          board[this.currentSquare[0] - counter][
            this.currentSquare[1] + counter
          ][0]
        ) {
          if (
            board[this.currentSquare[0] - counter][
              this.currentSquare[1] + counter
            ][0].color !== this.color
          ) {
            if (switch3) {
              possibleMoves.push([
                this.currentSquare[0] - counter,
                this.currentSquare[1] + counter,
              ]);
            }
          }
          switch3 = false;
        }
        if (switch3) {
          possibleMoves.push([
            this.currentSquare[0] - counter,
            this.currentSquare[1] + counter,
          ]);
        }
      }
      if (
        this.currentSquare[0] - counter >= 0 &&
        this.currentSquare[1] - counter >= 0
      ) {
        if (
          board[this.currentSquare[0] - counter][
            this.currentSquare[1] - counter
          ][0]
        ) {
          if (
            board[this.currentSquare[0] - counter][
              this.currentSquare[1] - counter
            ][0].color !== this.color
          ) {
            if (switch4) {
              possibleMoves.push([
                this.currentSquare[0] - counter,
                this.currentSquare[1] - counter,
              ]);
            }
          }
          switch4 = false;
        }
        if (switch4) {
          possibleMoves.push([
            this.currentSquare[0] - counter,
            this.currentSquare[1] - counter,
          ]);
        }
      }
    }
    counter = 0;
    for (let i = this.currentSquare[1]; i < board.length - 1; i++) {
      counter++;

      if (
        this.currentSquare[1] + counter < board.length - 1 &&
        board[this.currentSquare[0]][this.currentSquare[1] + counter][0]
      ) {
        if (
          board[this.currentSquare[0]][this.currentSquare[1] + counter][0]
            .color !== this.color
        ) {
          if (switch5) {
            possibleMoves.push([
              this.currentSquare[0],
              this.currentSquare[1] + counter,
            ]);
          }
        }
        switch5 = false;
      }
      if (switch5) {
        possibleMoves.push([
          this.currentSquare[0],
          this.currentSquare[1] + counter,
        ]);
      }
    }
    counter = 0;
    for (let i = 0; i < this.currentSquare[1]; i++) {
      counter++;

      if (
        this.currentSquare[1] - counter < board.length - 1 &&
        board[this.currentSquare[0]][this.currentSquare[1] - counter][0]
      ) {
        if (
          board[this.currentSquare[0]][this.currentSquare[1] - counter][0]
            .color !== this.color
        ) {
          if (switch6) {
            possibleMoves.push([
              this.currentSquare[0],
              this.currentSquare[1] - counter,
            ]);
          }
        }
        switch6 = false;
      }
      if (switch6) {
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
        this.currentSquare[0] + counter < board.length &&
        board[this.currentSquare[0] + counter][this.currentSquare[1]][0]
      ) {
        if (
          board[this.currentSquare[0] + counter][this.currentSquare[1]][0]
            .color !== this.color
        ) {
          if (switch7) {
            possibleMoves.push([
              this.currentSquare[0] + counter,
              this.currentSquare[1],
            ]);
          }
        }
        switch7 = false;
      }
      if (switch7) {
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
            .color != this.color
        ) {
          if (switch8) {
            possibleMoves.push([
              this.currentSquare[0] - counter,
              this.currentSquare[1],
            ]);
          }
        }
        switch8 = false;
      }
      if (switch8) {
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
  redo() {
    const p = this.currentSquare;
    this.currentSquare = this.prevSquare;
    this.prevSquare = p;
  }
}
