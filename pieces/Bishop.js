//for the color true=white false=black
export default class Bishop {
  constructor(square, color) {
    (this.currentSquare = square), (this.color = color);
    this.image = color
      ? `<img class="piece white-piece" src="./pieces/images/white-bishop.svg"/>`
      : `<img class="piece black-piece" src="./pieces/images/black-bishop.svg"/>`;
    this.prevSquare = "";
  }
  //pos=[x,y] ocupied=false or true up on the board is - in the list
  legalMove(board, pos) {
    if (pos[0] == this.currentSquare[0] || pos[1] == this.currentSquare[1]) {
      console.log("invalid move");
      return false;
    }
    const possibleMoves = [];
    let counter = 0;
    let switch1 = true;
    let switch2 = true;
    let switch3 = true;
    let switch4 = true;
    for (let i = 0; i <= board.length; i++) {
      console.log(counter, "top");
      counter++;
      if (
        this.currentSquare[0] + counter < board.length &&
        this.currentSquare[1] + counter < board.length &&
        switch1
      ) {
        possibleMoves.push([
          this.currentSquare[0] + counter,
          this.currentSquare[1] + counter,
        ]);
        if (
          board[this.currentSquare[0] + counter][
            this.currentSquare[1] + counter
          ][0]
        ) {
          switch1 = false;
        }
      }
      if (
        this.currentSquare[0] + counter < board.length &&
        this.currentSquare[1] - counter >= 0 &&
        switch2
      ) {
        possibleMoves.push([
          this.currentSquare[0] + counter,
          this.currentSquare[1] - counter,
        ]);
        if (
          board[this.currentSquare[0] + counter][
            this.currentSquare[1] - counter
          ][0]
        ) {
          switch2 = false;
        }
      }
      if (
        this.currentSquare[0] - counter >= 0 &&
        this.currentSquare[1] + counter < board.length &&
        switch3
      ) {
        possibleMoves.push([
          this.currentSquare[0] - counter,
          this.currentSquare[1] + counter,
        ]);
        if (
          board[this.currentSquare[0] - counter][
            this.currentSquare[1] + counter
          ][0]
        ) {
          if (
            board[this.currentSquare[0] - counter][
              this.currentSquare[1] + counter
            ][0].color == this.color
          ) {
            console.log("wrong color");
            switch3 = false;
          } else {
            possibleMoves.push([
              this.currentSquare[0] - counter,
              this.currentSquare[1] + counter,
            ]);
            switch3 = false;
          }
        }
      }
      if (
        this.currentSquare[0] - counter >= 0 &&
        this.currentSquare[1] - counter >= 0 &&
        switch4
      ) {
        possibleMoves.push([
          this.currentSquare[0] - counter,
          this.currentSquare[1] - counter,
        ]);
        if (
          board[this.currentSquare[0] - counter][
            this.currentSquare[1] - counter
          ][0]
        ) {
          switch4 = false;
        }
      }
    }

    for (let i = 0; i < possibleMoves.length; i++) {
      if (possibleMoves[i][0] == pos[0] && possibleMoves[i][1] == pos[1]) {
        this.prevSquare = this.currentSquare;
        this.currentSquare = pos;
        console.log(possibleMoves);
        return true;
      }
    }
    console.log("invalid move", "possible moves:", possibleMoves);
    return false;
  }
}
