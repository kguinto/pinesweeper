import React, { Component } from 'react';
import './Cell.css';

// disable context menu for right clicks
document.oncontextmenu = function() {
  return false;
};

class Cell extends Component {
  componentDidUpdate() {
    if (
      this.props.playing &&
      this.props.cell.visible &&
      this.props.cell.value === 'M'
    ) {
      this.props.endGame(false);
    }
  }

  render() {
    let { row, column, cell, revealCell, playing } = this.props;

    return (
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
  }
}

export default Cell;
