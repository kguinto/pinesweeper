import React from 'react';
import './Cell.css';

// disable context menu for right clicks
document.oncontextmenu = function() {
  return false;
};

const Cell = ({
  row,
  column,
  cell,
  revealCell,
  flagCell,
  gameStatus,
  startGame,
}) => {
  let value = '';
  if (
    (cell.visible || (gameStatus !== 'PLAYING' && gameStatus !== 'INIT')) &&
    !cell.flag &&
    cell.value === 'M'
  ) {
    value = '💣';
  } else if (cell.visible && cell.value !== 0) {
    value = cell.value;
  } else if (cell.flag && (gameStatus === 'PLAYING' || cell.value === 'M')) {
    value = '🚩';
  } else if (cell.flag && !gameStatus === 'PLAYING' && cell.value !== 'M') {
    value = '!💣';
  }

  return (
    <div
      className={`cell ${cell.visible ? 'shown-cell' : 'hidden-cell'}`}
      onClick={() => {
        if (gameStatus === 'INIT') {
          startGame();
        }
        if (
          (gameStatus === 'INIT' || gameStatus === 'PLAYING') &&
          !cell.visible &&
          !cell.flag
        )
          revealCell(row, column);
      }}
      onContextMenu={() => {
        if (gameStatus === 'PLAYING' && !cell.visible) flagCell(row, column);
      }}
    >
      {value}
    </div>
  );
};

export default Cell;
