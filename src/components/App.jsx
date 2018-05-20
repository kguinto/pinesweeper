import React, { Component } from 'react';
import './App.css';
import Timer from './Timer';
import FlagCount from './FlagCount';
import Board from '../containers/Board';
import Difficulty from './Difficulty';
import DifficultyButtons from './DifficultyButtons';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStatus: 'INIT',
      flags: Difficulty.EASY[2],
      face: 'SMILING',
      initOptions: Difficulty.EASY,
    };

    this.initializeBoard = this.initializeBoard.bind(this);
    this.endGame = this.endGame.bind(this);
    this.updateFlags = this.updateFlags.bind(this);
    this.startGame = this.startGame.bind(this);

    this.initializeBoard(...Difficulty.EASY);
  }

  initializeBoard(rows, columns, mines) {
    this.props.initializeBoard(rows, columns, mines);
    this.setState({
      gameStatus: 'INIT',
      initOptions: [rows, columns, mines],
      flags: mines,
    });
  }

  startGame() {
    this.setState({ gameStatus: 'PLAYING' });
  }

  endGame(won) {
    this.setState({ gameStatus: won ? 'WIN' : 'LOSE' });
  }

  updateFlags(flags) {
    this.setState({ flags });
  }

  render() {
    let smiley = '';
    let { gameStatus, flags } = this.state;
    if (gameStatus === 'WIN') {
      smiley = (
        <span role="img" className="button-smiley" aria-label="smiling">
          😎
        </span>
      );
    } else if (gameStatus === 'LOSE') {
      smiley = (
        <span role="img" className="button-smiley" aria-label="smiling">
          😵
        </span>
      );
    } else {
      smiley = (
        <span role="img" className="button-smiley" aria-label="smiling">
          🙂
        </span>
      );
    }
    return (
      <div className="app">
        <div className="board-frame">
          <div className="board-header">
            <FlagCount flags={flags} />
            <button
              className="button smiley-button"
              onClick={() => this.initializeBoard(...this.state.initOptions)}
            >
              {smiley}
            </button>
            <Timer gameStatus={gameStatus} />
          </div>
          <Board
            gameStatus={gameStatus}
            startGame={this.startGame}
            endGame={this.endGame}
            updateFlags={this.updateFlags}
          />
          <DifficultyButtons initializeBoard={this.initializeBoard} />
        </div>
      </div>
    );
  }
}

export default App;
