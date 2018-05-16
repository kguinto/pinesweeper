import React from 'react';
import Cell from '../containers/Cell';
import './Board.css';

const Board = ({ board, playing, endGame }) => {
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
};

export default Board;
