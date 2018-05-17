import React from 'react';
import './Cell.css';

// disable context menu for right clicks
document.oncontextmenu = function() {
  return false;
};

const Cell = ({ row, column, cell, revealCell, playing }) => (
  <div
    className={`cell ${cell.visible ? 'shown-cell' : 'hidden-cell'}`}
    onClick={() => {
      if (playing && !cell.visible) revealCell(row, column);
    }}
    onContextMenu={() => {
      console.log(`R ${row}, ${column}`);
    }}
  >
    {cell.visible && cell.value ? cell.value : ''}
  </div>
);

export default Cell;
