//for the color true=white false=black
export default class Pawn {
  constructor(square, color) {
    (this.currentSquare = square), (this.color = color);
    this.image = color
      ? `<img class="piece white-piece" src="./pieces/images/white-pawn.svg"/>`
      : `<img class="piece black-piece" src="./pieces/images/black-pawn.svg"/>`;
    this.prevSquare = "";
  }
  //pos=[x,y] ocupied=false or true up on the board is - in the list
  legalMove(board, pos) {
    const ocupied = board[pos[0]][pos[1]][0] ? true : false;
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
    return false;
  }
}
