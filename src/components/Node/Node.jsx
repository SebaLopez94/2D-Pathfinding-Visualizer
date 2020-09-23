import React from "react";

import "./Node.css";

const Node = ({row, col, isFinish, isStart, isWall, onMouseDown, onMouseEnter, onMouseLeave}) => {
  const extraClassName = isFinish
    ? "node-finish"
    : isStart
    ? "node-start"
    : isWall
    ? "node-wall"
    : "";

  return (
    <div
      id={`node-${row}-${col}`}
      className={`node ${extraClassName}`}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseLeave={() => onMouseLeave(row, col)}
    ></div>
  );
};

export default Node;
