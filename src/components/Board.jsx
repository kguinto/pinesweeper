import React, { Component } from 'react';
import Cell from '../containers/Cell';
import './Board.css';

class Board extends Component {
  componentDidUpdate() {
    // Lose conditions: mine is visible
    // Win conditions: all mines are flagged or all non-mines are visible
    let allNonMinesVisible = true;
    let mineVisible = false;

    if (this.props.playing) {
      this.props.board.forEach(row => {
        row.forEach(cell => {
          if (cell.visible && cell.value === 'M') {
            mineVisible = true;
          }

          if (!cell.visible && cell.value !== 'M') {
            allNonMinesVisible = false;
          }
        });
      });

      if (mineVisible) {
        this.props.endGame(false);
      } else if (allNonMinesVisible) {
        this.props.endGame(true);
      }
    }
  }

  render() {
    let { board, playing, endGame } = this.props;

    return (
      <div className="board">
        {board &&
          board.map((rowItems, row) => (
            <div className="board-row" key={`row_${row}`}>
              {rowItems.map((cell, column) => (
                <Cell
                  row={row}
                  column={column}
                  cell={cell}
                  playing={playing}
                  endGame={endGame}
                  key={`cell_${row}_${column}`}
                />
              ))}
            </div>
          ))}
      </div>
    );
  }
}

export default Board;
