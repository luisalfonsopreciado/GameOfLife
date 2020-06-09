import React from "react";
import styles from "./Cell.module.css";

const Cell = ({ row, col, val, changeBoard, isMouseDown, isAnimating }) => {
  const classes = [styles.Cell];
  val === 1 && classes.push(styles.Active);

  const onMoveHandler = () => {
    if (isMouseDown && !isAnimating) {
      changeBoard(row, col, 1);
      classes.push(styles.Active);
    }
  };

  return (
    <div
      className={classes.join(" ")}
      draggable={false}
      onMouseEnter={onMoveHandler}
    ></div>
  );
};

const compare = (prevState, nextState) => {
  return prevState.val === nextState.val && prevState.isMouseDown === nextState.isMouseDown;
};

export default React.memo(Cell, compare);
