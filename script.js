import Bishop from "./pieces/Bishop.js";
import Pawn from "./pieces/Pawn.js";
import Rook from "./pieces/Rook.js";

const chessContainer = document.querySelector("#chess-container");

const board = [
  [[], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], []],
  [[], [], [], [], [], [], [], []],
];
const pawns = [];

const newBishop = new Bishop([0, 0], true);
const newRook = new Rook([5, 5], false);
makeMove(board, newBishop);
makeMove(board, newRook);

for (let i = 0; i < 8; i++) {
  const newPawn = new Pawn([6, i], true);
  makeMove(board, newPawn);
  pawns.push(newPawn);
}
let selectedSquare = "";
let prevSelectedSquare = "";
let selectedpiece = "";
board.forEach((row, i) => {
  chessContainer.innerHTML += `<div class="row" id="row-${i + 1}"></div>`;
  const rowContainer = document.querySelector(`#row-${i + 1}`);
  const x = String.fromCharCode(i + 97);
  row.forEach((square, j) => {
    const y = j + 1;
    rowContainer.innerHTML += `<div class="square" id="${x + y}"></div>`;
  });
});
updateBoard(chessContainer, board);
const squares = document.querySelectorAll(".square");
squares.forEach((sq) => {
  sq.addEventListener("click", handleClick);
});
function handleClick() {
  const pos = deconstructId(this.id);

  if (selectedSquare == this) {
    selectedSquare = "";
  } else {
    prevSelectedSquare = selectedSquare;
    selectedSquare = this;
  }
  if (selectedpiece && selectedSquare) {
    if (selectedpiece.legalMove(board, deconstructId(selectedSquare.id))) {
      console.log(
        board[selectedpiece.currentSquare[0]][selectedpiece.currentSquare[1]]
      );
      makeMove(board, selectedpiece);
      selectedpiece = "";
      selectedSquare = "";
    }
  }
  if (board[pos[0]][pos[1]][0]) {
    selectedpiece = board[pos[0]][pos[1]][0];
    selectedSquare = "";
  }

  updateBoard(chessContainer, board);
}

function updateBoard(display, list) {
  list.forEach((row, i) => {
    row.forEach((piece, j) => {
      display.children[j].children[i].innerHTML = "";
      display.children[j].children[i].style.borderColor = "transparent";
      if (piece.length > 0) {
        display.children[j].children[i].innerHTML = piece[0].image;
      }
    });
  });
  if (selectedSquare) {
    selectedSquare.style.borderColor = "green";
  }
}
updateBoard(chessContainer, board);
function deconstructId(id) {
  return [parseInt(id.split("")[1] - 1), id.split("")[0].charCodeAt(0) - 97];
}
function checkSquare(square) {
  if (board[square[0]][square[1]].length > 0) return true;
  return false;
}
function possiblemoves(piece) {
  const possibleMoves = [];
  if (board[piece.currentSquare[0] + 1][piece.currentSquare[1]].length > 0) {
    possibleMoves.push([piece.currentSquare[0] + 1, piece.currentSquare[1]]);
    console.log(possibleMoves);
  }
}
function makeMove(board, piece) {
  if (board[piece.currentSquare[0]][piece.currentSquare[1]][0]) {
    board[piece.currentSquare[0]][piece.currentSquare[1]].pop();
  }
  if (piece.prevSquare) {
    board[piece.prevSquare[0]][piece.prevSquare[1]].pop();
  }
  board[piece.currentSquare[0]][piece.currentSquare[1]].push(piece);
}
