import React, { Component } from 'react';
import './App.css';
import Board from '../containers/Board';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { playing: false };

    this.initializeBoard = this.initializeBoard.bind(this);
    this.endGame = this.endGame.bind(this);
  }

  initializeBoard(rows, columns, mines) {
    this.props.initializeBoard(rows, columns, mines);
    this.setState({ playing: true });
  }

  endGame(won) {
    console.log(won ? 'won!' : 'lost!');
    this.setState({ playing: false });
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Minesweeper</h1>
        </header>
        Playing: {this.state.playing.toString()}
        <button onClick={() => this.initializeBoard(8, 8, 6)}>
          Initialize
        </button>
        <section
          className="content"
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '3em',
          }}
        >
          <Board playing={this.state.playing} endGame={this.endGame} />
        </section>
      </div>
    );
  }
}

export default App;
