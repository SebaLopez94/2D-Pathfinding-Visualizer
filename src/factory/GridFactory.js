export default class GridFactory {
  static getInitialGrid = (startNode, finishNode) => {
    const grid = [];
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 45; col++) {
        currentRow.push(this.createNode(col, row, startNode, finishNode));
      }
      grid.push(currentRow);
    }
    return grid;
  };

  static getNewGridWithWallToggled = (grid, row, col) => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    const newNode = {
      ...node,
      isWall: !node.isWall,
    };
    newGrid[row][col] = newNode;
    return newGrid;
  };

  static getNewGridWithStarNode = (grid, row, col, leaveTheNode) => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    const newNode = {
      ...node,
      isStart: !leaveTheNode,
      isWall: false
    };
    newGrid[row][col] = newNode;
    return newGrid;
  };

  static getNewGridWithFinishNode = (grid, row, col, leaveTheNode) => {
    const newGrid = grid.slice();
    const node = newGrid[row][col];
    const newNode = {
      ...node,
      isFinish: !leaveTheNode,
      isWall: false
    };
    newGrid[row][col] = newNode;
    return newGrid;
  };


  static createNode = (col, row, startNode, finishNode) => {
    return {
      col,
      row,
      isStart: row === startNode.row && col === startNode.col,
      isFinish: row === finishNode.row && col === finishNode.col,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      previousNode: null,
    };
  };
}
