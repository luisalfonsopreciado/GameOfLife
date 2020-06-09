import React, { useState, useEffect } from "react";
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
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setBoard(generateRandomBoard(gridLength, gridLength));
  }, [gridLength, setBoard]);

  const animate = async () => {
    setIsAnimating(true);
    runAnimation(board, setBoard, gridLength, setIsAnimating);
  };

  const newGrid = () => {
    setBoard(generateRandomBoard(gridLength, gridLength));
  };

  let Board = board.map((row, rowNum) => {
    return board.map((col, colNum) => {
      return (
        <Cell
          key={[rowNum, colNum]}
          isMouseDown={isMouseDown}
          row={rowNum}
          col={colNum}
          val={board[rowNum][colNum]}
          changeBoard={changeBoard}
          isAnimating={isAnimating}
        />
      );
    });
  });

  return (
    <>
      <div style={{ margin: "auto" }}>
        <Button onClick={animate} disabled={isAnimating}>
          Run Animation
        </Button>
        <Button onClick={newGrid} disabled={isAnimating}>
          New Random Grid
        </Button>
        <Button onClick={resetBoard} disabled={isAnimating}>
          Clear Grid
        </Button>
        <Button
          onClick={() => setGridLength(gridLength === 30 ? 10 : 30)}
          disabled={isAnimating}
        >
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
