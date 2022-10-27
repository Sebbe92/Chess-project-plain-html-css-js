import Bishop from "./pieces/Bishop.js";
import King from "./pieces/King.js";
import Knight from "./pieces/Knight.js";
import Pawn from "./pieces/Pawn.js";
import Queen from "./pieces/Queen.js";
import Rook from "./pieces/Rook.js";

const chessContainer = document.querySelector("#chess-board");

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
let possibleMoves = [];
const newBishop = new Bishop([4, 1], false);
const newRook = new Rook([5, 5], false);
const testPawn = new Pawn([1, 3], false);
const testQueen = new Queen([3, 4], true);
const testKing = new King([4, 3], true);
const testKnight = new Knight([2, 5], true);
makeMove(board, newBishop);
makeMove(board, newRook);
makeMove(board, testPawn);
makeMove(board, testQueen);
makeMove(board, testKing);
makeMove(board, testKnight);
for (let i = 0; i < 8; i++) {
  const newPawn = new Pawn([1, i], true);
  makeMove(board, newPawn);
  pawns.push(newPawn);
}
for (let i = 0; i < 8; i++) {
  const newPawn = new Pawn([6, i], false);
  makeMove(board, newPawn);
  pawns.push(newPawn);
}
let selectedSquare = "";
let prevSelectedSquare = "";
let selectedPiece = "";
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
  if (possibleMoves.length > 0) {
    possibleMoves.forEach((move) => {
      if (move[0] == pos[0] && move[1] == pos[1]) {
        selectedPiece.move(pos);
        makeMove(board, selectedPiece);
      }
    });
  }
  if (
    (board[pos[0]][pos[1]][0] && !selectedPiece) ||
    (board[pos[0]][pos[1]][0] && !possibleMoves.includes(pos))
  ) {
    selectedPiece = board[pos[0]][pos[1]][0];
    selectedSquare = "";
  }

  if (selectedSquare == this) {
    selectedSquare = "";
    selectedPiece = "";
  } else {
    prevSelectedSquare = selectedSquare;
    selectedSquare = this;
  }
  if (selectedPiece) {
    if (selectedPiece.possibleMoves(board)) {
      possibleMoves = selectedPiece.possibleMoves(board);
    }
  } else {
    selectedPiece = "";
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
  possibleMoves.forEach((move) => {
    display.children[move[1]].children[move[0]].style.borderColor = "green";
  });
}
updateBoard(chessContainer, board);
function deconstructId(id) {
  return [parseInt(id.split("")[1] - 1), id.split("")[0].charCodeAt(0) - 97];
}
function constructId(id) {
  const letternum = id[0] + 97;
  const num = id[1] + 1;
  return String.fromCharCode(letternum) + num.toString();
}
function checkSquare(square) {
  if (board[square[0]][square[1]].length > 0) return true;
  return false;
}
function possiblemoves(piece) {
  const possibleMoves = [];
  if (board[piece.currentSquare[0] + 1][piece.currentSquare[1]].length > 0) {
    possibleMoves.push([piece.currentSquare[0] + 1, piece.currentSquare[1]]);
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
