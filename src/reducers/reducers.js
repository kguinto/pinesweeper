import { combineReducers } from 'redux';
import { INITIALIZE_BOARD, REVEAL_CELL, FLAG_CELL } from '../actions/actions';
import {
  createBlankBoard,
  placeMines,
  updateNumbers,
  revealCell,
  flagCell,
} from './boardFunctions';

// const printifyBoard = state => state.map(row => row.map(cell => `${cell.value}${(cell.visible) ? '!' : ''}`));

function board(state = [], action) {
  switch (action.type) {
    case INITIALIZE_BOARD:
      state = createBlankBoard(action.rows, action.columns);
      var { state, mines } = placeMines(state, action.mines);
      state = updateNumbers(state, mines);
      return state;

    case REVEAL_CELL:
      state = JSON.parse(JSON.stringify(state)); // deep copy
      state = revealCell(state, action.row, action.column);
      return state;

    case FLAG_CELL:
      state = JSON.parse(JSON.stringify(state)); // deep copy
      state = flagCell(state, action.row, action.column);
      return state;

    default:
      return state;
  }
}

export default combineReducers({
  board,
});
