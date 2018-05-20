import React, { Component } from 'react';
import './App.css';
import Board from '../containers/Board';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { gameStatus: 'INIT', flags: 0, face: 'SMILING' };

    this.initializeBoard = this.initializeBoard.bind(this);
    this.endGame = this.endGame.bind(this);
    this.updateFlags = this.updateFlags.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  initializeBoard(rows, columns, mines) {
    this.props.initializeBoard(rows, columns, mines);
    this.setState({ gameStatus: 'INIT' });
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
        <header className="app-header">
          <h1 className="app-title">Minesweeper</h1>
        </header>
        <section
          className="content"
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '3em',
          }}
        >
          <div className="board-frame">
            <div className="board-header">
              Flags: {flags}
              <button
                className="smiley-button"
                onClick={() => this.initializeBoard(8, 8, 6)}
              >
                {smiley}
              </button>Time: 0
            </div>
            <Board
              gameStatus={gameStatus}
              startGame={this.startGame}
              endGame={this.endGame}
              updateFlags={this.updateFlags}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
