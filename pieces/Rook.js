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
  legalMove(board, pos) {
    const possibleMoves = [];
    let counter = 0;
    let switch1 = true;
    let switch2 = true;
    let switch3 = true;
    let switch4 = true;
    if (this.currentSquare[0] != pos[0] && this.currentSquare[1] != pos[1]) {
      console.log("invalid move!");
      return false;
    }
    if (this.currentSquare[0] == pos[0] && this.currentSquare[1] != pos[1]) {
      for (let i = this.currentSquare[1]; i < pos[1]; i++) {
        counter++;
        if (switch1) {
          possibleMoves.push([
            this.currentSquare[0],
            this.currentSquare[1] + counter,
          ]);
        }

        if (board[this.currentSquare[0]][this.currentSquare[1] + counter][0]) {
          switch1 = false;
        }
      }
      counter = 0;
      for (let i = pos[1]; i < this.currentSquare[1]; i++) {
        counter++;
        if (switch2) {
          possibleMoves.push([
            this.currentSquare[0],
            this.currentSquare[1] - counter,
          ]);
        }

        if (board[this.currentSquare[0]][this.currentSquare[1] - counter][0]) {
          switch2 = false;
        }
      }
    }
    if (this.currentSquare[0] != pos[0] && this.currentSquare[1] == pos[1]) {
    }
    counter = 0;
    for (let i = this.currentSquare[0]; i < pos[0]; i++) {
      counter++;
      if (switch3) {
        possibleMoves.push([
          this.currentSquare[0] + counter,
          this.currentSquare[1],
        ]);
      }

      if (board[this.currentSquare[0] + counter][this.currentSquare[1]][0]) {
        switch3 = false;
      }
    }
    counter = 0;
    for (let i = pos[0]; i < this.currentSquare[0]; i++) {
      counter++;
      if (switch4) {
        possibleMoves.push([
          this.currentSquare[0] - counter,
          this.currentSquare[1],
        ]);
      }

      if (board[this.currentSquare[0] - counter][this.currentSquare[1]][0]) {
        switch4 = false;
      }
    }
    for (let i = 0; i < possibleMoves.length; i++) {
      if (possibleMoves[i][0] == pos[0] && possibleMoves[i][1] == pos[1]) {
        console.log("valid move");
        this.prevSquare = this.currentSquare;
        this.currentSquare = pos;
        console.log(this.currentSquare, "current square");
        return true;
      }
    }
    console.log("invalid move!");
    return false;
  }
}
