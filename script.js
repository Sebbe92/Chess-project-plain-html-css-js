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
//0=Rook
//1=Bishop
//2=Knight
//3=Queen
//4=King
const pieceOrder = [0, 1, 2, 3, 4, 2, 1, 0];
const pieces = [];
let possibleMoves = [];
let turn = true;
for (let i = 0; i < 8; i++) {
  console.log(pieceOrder[i]);
  switch (pieceOrder[i]) {
    case 0:
      const rook = new Rook([0, i], true);
      makeMove(board, rook);
      pieces.push(rook);
      console.log(rook);
      break;

    case 1:
      const bishop = new Bishop([0, i], true);
      makeMove(board, bishop);
      pieces.push(bishop);
      break;
    case 2:
      const knight = new Knight([0, i], true);
      makeMove(board, knight);
      pieces.push(knight);
      break;
    case 3:
      const queen = new Queen([0, i], true);
      makeMove(board, queen);
      pieces.push(queen);
      break;
    case 4:
      const king = new King([0, i], true);
      makeMove(board, king);
      pieces.push(king);
      break;
  }
}

for (let i = 0; i < 8; i++) {
  switch (pieceOrder[i]) {
    case 0:
      const rook = new Rook([7, i], false);
      makeMove(board, rook);
      pieces.push(rook);
      console.log(rook);
      break;

    case 1:
      const bishop = new Bishop([7, i], false);
      makeMove(board, bishop);
      pieces.push(bishop);
      break;
    case 2:
      const knight = new Knight([7, i], false);
      makeMove(board, knight);
      pieces.push(knight);
      break;
    case 3:
      const queen = new Queen([7, i], false);
      makeMove(board, queen);
      pieces.push(queen);
      break;
    case 4:
      const king = new King([7, i], false);
      makeMove(board, king);
      pieces.push(king);
      break;
  }
}
for (let i = 0; i < 8; i++) {
  const newPawn = new Pawn([1, i], true);
  makeMove(board, newPawn);
  pieces.push(newPawn);
}
for (let i = 0; i < 8; i++) {
  const newPawn = new Pawn([6, i], false);
  makeMove(board, newPawn);
  pieces.push(newPawn);
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
        turn = turn ? false : true;
        selectedPiece = "";
        possibleMoves = [];
        updateBoard(chessContainer, board);
        return;
      }
    });
  }
  if (
    (board[pos[0]][pos[1]][0] && !selectedPiece) ||
    (board[pos[0]][pos[1]][0] && !possibleMoves.includes(pos))
  ) {
    if (turn == board[pos[0]][pos[1]][0].color) {
      selectedPiece = board[pos[0]][pos[1]][0];
    } else {
      console.log("not your turn");
    }

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
