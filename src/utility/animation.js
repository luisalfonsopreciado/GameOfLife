// Any live cell with fewer than two live neighbours dies, as if by underpopulation.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overpopulation.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
import { generateRandomBoard } from "./index";

export const runAnimation = (board, setBoard, maxNum, setIsAnimating) => {
  let gameHasEnded = false;
  let secondboard = generateRandomBoard(board.length, board[0].length);
  let count = 0;
  //Loop thru each cell applying rules
  let intervalId = setInterval(() => {
    count++;
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        const count = countNeighbors(row, col, board);
        if (count < 2 || count > 3) {
          secondboard[row][col] = 0;
        } else if (count === 3) {
          secondboard[row][col] = 1;
        } else {
          secondboard[row][col] = board[row][col];
        }
      }
    }
    const temp = board;
    board = secondboard;
    secondboard = temp;
    //check if game has ended
    gameHasEnded = checkEmptyBoard(board);
    setBoard(board);
    if (count >= maxNum || gameHasEnded) {
      setIsAnimating(false);
      clearInterval(intervalId);
    }
  }, 250);
};

const checkEmptyBoard = (board) => {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === 1) return false;
    }
  }
  return true;
};

const countNeighbors = (row, col, board) => {
  let count = 0;
  if (row > 0) {
    // N
    if (board[row - 1][col] === 1) count++;
  }
  if (col > 0) {
    // W
    if (board[row][col - 1] === 1) count++;
  }
  if (row < board.length - 1) {
    // S
    if (board[row + 1][col] === 1) count++;
  }
  if (col < board[row].length - 1) {
    // E
    if (board[row][col + 1] === 1) count++;
  }
  if (row > 0 && col > 0) {
    // NW
    if (board[row - 1][col - 1] === 1) count++;
  }
  if (row > 0 && col < board[row].length - 1) {
    // NE
    if (board[row - 1][col + 1] === 1) count++;
  }
  if (row < board.length - 1 && col > 0) {
    // SW
    if (board[row + 1][col - 1] === 1) count++;
  }
  if (row < board.length - 1 && col < board[row].length - 1) {
    // SE
    if (board[row + 1][col + 1] === 1) count++;
  }

  return count;
};
