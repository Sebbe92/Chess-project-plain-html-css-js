import Bishop from "./pieces/Bishop.js";
import King from "./pieces/King.js";

import Knight from "./pieces/Knight.js";
import Pawn from "./pieces/Pawn.js";

import Queen from "./pieces/Queen.js";
import Rook from "./pieces/Rook.js";

const chessContainer = document.querySelector("#chess-board");
const reDoBtn = document.querySelector("#redo-btn");
const saveBtn = document.querySelector("#save-btn");
const clearSaveBtn = document.querySelector("#clear-save-btn");

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
const prevBoards = [];
//0=Rook
//1=Bishop
//2=Knight
//3=Queen
//4=King
const pieceOrder = [0, 2, 1, 3, 4, 1, 2, 0];
const pieces = [];
const kings = [];
let possibleMoves = [];
let turn = true;
let lastMovedPiece = {};

if (localStorage.getItem("pieces")) {
  JSON.parse(localStorage.getItem("pieces")).forEach((piece) => {
    console.log(piece);
    switch (piece.name) {
      case "rook":
        const rook = new Rook(
          [piece.currentSquare[0], piece.currentSquare[1]],
          piece.color
        );
        makeMove(board, rook);
        pieces.push(rook);
        break;

      case "bishop":
        const bishop = new Bishop(
          [piece.currentSquare[0], piece.currentSquare[1]],
          piece.color
        );
        makeMove(board, bishop);
        pieces.push(bishop);
        break;
      case "knight":
        const knight = new Knight(
          [piece.currentSquare[0], piece.currentSquare[1]],
          piece.color
        );
        makeMove(board, knight);
        pieces.push(knight);
        break;
      case "queen":
        const queen = new Queen(
          [piece.currentSquare[0], piece.currentSquare[1]],
          piece.color
        );
        makeMove(board, queen);
        pieces.push(queen);
        break;
      case "king":
        console.log(piece);
        const king = new King(
          [piece.currentSquare[0], piece.currentSquare[1]],
          piece.color
        );
        makeMove(board, king);
        pieces.push(king);
        kings.push(king);
        break;

      case "pawn":
        const pawn = new Pawn(
          [piece.currentSquare[0], piece.currentSquare[1]],
          piece.color
        );
        makeMove(board, pawn);
        pieces.push(pawn);
        break;
    }
  });
} else {
  for (let i = 0; i < 8; i++) {
    switch (pieceOrder[i]) {
      case 0:
        const rook = new Rook([0, i], true);
        makeMove(board, rook);
        pieces.push(rook);
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
        kings.push(king);
        break;
    }
  }

  for (let i = 0; i < 8; i++) {
    switch (pieceOrder[i]) {
      case 0:
        const rook = new Rook([7, i], false);
        makeMove(board, rook);
        pieces.push(rook);

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
        kings.push(king);
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
function moveSelectedPiece(piece, pos) {
  piece.move(pos);
  makeMove(board, selectedPiece);
  lastMovedPiece = selectedPiece;
  isTheKingSafe();
}
function handleClick() {
  const pos = deconstructId(this.id);
  if (possibleMoves.length > 0) {
    possibleMoves.forEach((move) => {
      if (move[0] == pos[0] && move[1] == pos[1]) {
        moveSelectedPiece(selectedPiece, pos);
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
reDoBtn.addEventListener("click", () => {
  lastMovedPiece.redo();

  makeMove(board, lastMovedPiece);
  turn = turn ? false : true;
  lastMovedPiece.prevSquare = "";
  lastMovedPiece = "";
  updateBoard(chessContainer, board);
});
saveBtn.addEventListener("click", savePieces);
clearSaveBtn.addEventListener("click", clearSave);
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
  if (board[piece.currentSquare[0]][piece.currentSquare[1]].length > 0) {
    pieces.splice(
      pieces.indexOf(board[piece.currentSquare[0]][piece.currentSquare[1]][0]),
      1
    );

    board[piece.currentSquare[0]][piece.currentSquare[1]].pop();
  }
  if (piece.prevSquare) {
    board[piece.prevSquare[0]][piece.prevSquare[1]].pop();
  }
  board[piece.currentSquare[0]][piece.currentSquare[1]].push(piece);
}
function isTheKingSafe() {
  const kingPos1 = kings[0].currentSquare;
  const kingPos2 = kings[1].currentSquare;
  pieces.forEach((piece) => {
    if (piece.possibleMoves(board)) {
      piece.possibleMoves(board).forEach((move) => {
        if (
          (move[0] == kingPos1[0] && move[1] == kingPos1[1]) ||
          (move[0] == kingPos2[0] && move[1] == kingPos2[1])
        ) {
          console.log("danger");
        }
      });
    }
  });
}

isTheKingSafe();
function savePieces() {
  console.log(pieces);
  localStorage.setItem("pieces", JSON.stringify(pieces));
}
function clearSave() {
  localStorage.removeItem("pieces");
}
