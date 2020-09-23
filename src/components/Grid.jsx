import React, { Fragment, useState } from "react";
import Node from "./Node/Node";
import Navbar from "./Layout/Navbar";
import { visualizeDijkstra } from "../algorithms/dijkstra";

import GridFactory from "../factory/GridFactory";
import Constants from "../utils/constants";

import "./Grid.css";

const Grid = () => {
  const [startNode, setStartNode] = useState({
    row: Constants.START_NODE_ROW,
    col: Constants.START_NODE_COL,
    isMoving: false,
  });
  const [finishNode, setFinishNode] = useState({
    row: Constants.FINISH_NODE_ROW,
    col: Constants.FINISH_NODE_COL,
    isMoving: false,
  });
  const [isMousePressed, setIsMousePressed] = useState(false);

  const [grid, setGrid] = useState(
    GridFactory.getInitialGrid(startNode, finishNode)
  );

  const handleMouseDown = (row, col) => {
    setIsMousePressed(true);
    let nodeClicked = grid[row][col];
    if (nodeClicked.isStart) {
      setStartNode({ ...startNode, isMoving: true });
    } else if (nodeClicked.isFinish) {
      setFinishNode({ ...finishNode, isMoving: true });
    }else{
      const newGrid = GridFactory.getNewGridWithWallToggled(grid, row, col);
      setGrid(newGrid);
    }
  };

  const handleMouseEnter = (row, col) => {
    if (!isMousePressed) return;
    let newGrid;
    if (startNode.isMoving) {
      newGrid = GridFactory.getNewGridWithStarNode(grid, row, col, false);
      setStartNode({ ...startNode, row, col });
    } else if (finishNode.isMoving) {
      newGrid = GridFactory.getNewGridWithFinishNode(grid, row, col, false);
      setFinishNode({ ...finishNode, row, col });
    } else {
      newGrid = GridFactory.getNewGridWithWallToggled(grid, row, col);
    }
    setGrid(newGrid);
  };

  const handleMouseLeave = (row, col) => {
    if (!isMousePressed) return;
    if (startNode.isMoving) {
      const newGrid = GridFactory.getNewGridWithStarNode(grid, row, col, true);
      setGrid(newGrid);
    } else if (finishNode.isMoving) {
      const newGrid = GridFactory.getNewGridWithFinishNode(
        grid,
        row,
        col,
        true
      );
      setGrid(newGrid);
    }
  };

  const handleMouseUp = () => {
    setIsMousePressed(false);
    setStartNode({ ...startNode, isMoving: false });
    setFinishNode({ ...finishNode, isMoving: false });
  };

  return (
    <Fragment>
      <Navbar
        grid={grid}
        startNode={startNode}
        finishNode={finishNode}
        onClickVisualization={() => visualizeDijkstra(grid, startNode, finishNode)}  
      ></Navbar>
      <div className="grid" onMouseUp={() => handleMouseUp()}>
        {grid.map((row, rowIdx) => {
          return (
            <div key={rowIdx} className="div_node">
              {row.map((node, nodeIdx) => {
                const { row, col, isFinish, isStart, isWall } = node;
                return (
                  <Node
                    key={nodeIdx}
                    col={col}
                    isFinish={isFinish}
                    isStart={isStart}
                    isWall={isWall}
                    mouseIsPressed={isMousePressed}
                    onMouseDown={(row, col) => handleMouseDown(row, col)}
                    onMouseEnter={(row, col) => handleMouseEnter(row, col)}
                    onMouseLeave={(row, col) => handleMouseLeave(row, col)}
                    row={row}
                  ></Node>
                );
              })}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Grid;
