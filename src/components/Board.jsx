import React, { Component } from 'react';
import Cell from '../containers/Cell';
import './Board.css';

class Board extends Component {
  componentDidUpdate() {
    // Lose conditions: mine is visible
    // Win conditions: all mines are flagged or all non-mines are visible
    let allNonMinesVisible = true;
    let mineVisible = false;
    let mines = 0;
    let flags = 0;
    let flaggedMines = 0;

    if (this.props.gameStatus === 'PLAYING') {
      this.props.board.forEach(row => {
        row.forEach(cell => {
          if (cell.value === 'M') {
            mines += 1;
          }
          if (cell.flag) {
            flags += 1;
          }

          if (cell.flag && cell.value === 'M') {
            flaggedMines += 1;
          }

          if (cell.visible && cell.value === 'M') {
            mineVisible = true;
          }

          if (!cell.visible && cell.value !== 'M') {
            allNonMinesVisible = false;
          }
        });
      });

      this.props.updateFlags(mines - flags);

      if (mineVisible) {
        this.props.endGame(false);
      } else if (allNonMinesVisible) {
        this.props.endGame(true);
      } else if (mines === flaggedMines) {
        this.props.endGame(true);
      }
    }
  }

  render() {
    let { board, gameStatus, endGame, startGame } = this.props;

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
                  gameStatus={gameStatus}
                  endGame={endGame}
                  startGame={startGame}
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
