import React, { useState } from "react";
import { useBoard } from "../hooks/useBoard";
import Cell from "./Cell";
import styles from "./Board.module.css";
import Button from "@material-ui/core/Button";
import { runAnimation, generateRandomBoard } from "../utility/";

const GRID_LENGTH = 20;

const Board = () => {
  const [gridLength, setGridLength] = useState(GRID_LENGTH);
  const [board, setBoard, changeBoard, resetBoard] = useBoard(
    gridLength,
    gridLength
  );
  const [isMouseDown, setIsMouseDown] = useState(false);

  const animate = () => {
    runAnimation(board, setBoard, gridLength);
  };

  const newGrid = () => {
    setBoard(generateRandomBoard(gridLength, gridLength));
  };

  let Board = null;
  Board = board.map((row, rowNum) => {
    return board.map((col, colNum) => {
      return (
        <Cell
          isMouseDown={isMouseDown}
          row={rowNum}
          col={colNum}
          val={board[rowNum][colNum]}
          changeBoard={changeBoard}
        />
      );
    });
  });
  return (
    <>
      <div style={{ margin: "auto" }}>
        <Button onClick={animate}>Run Animation</Button>
        <Button onClick={newGrid}>New Random Grid</Button>
        <Button onClick={resetBoard}>Clear Grid</Button>
        <Button onClick={() => setGridLength(gridLength === 30 ? 10 : 30)}>
          Toggle Grid Size
        </Button>
      </div>
      <div
        className={styles.Board}
        onMouseDown={() => {
          setIsMouseDown(true);
        }}
        onMouseUp={() => {
          setIsMouseDown(false);
        }}
        draggable={false}
        style={{
          gridTemplateColumns: `repeat(${gridLength}, 1fr)`,
          gridTemplateRows: `repeat(${gridLength}, 1fr)`,
        }}
      >
        {Board}
      </div>
    </>
  );
};

export default Board;
