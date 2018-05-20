import React from 'react';
import Difficulty from './Difficulty';
import './DifficultyButtons.css';

const DifficultyButtons = ({ initializeBoard }) => (
  <div>
    <span className="difficulty-buttons">
      <button
        className="button difficulty-button"
        onClick={() => initializeBoard(...Difficulty.EASY)}
      >
        <span role="img" aria-label="easy-mode">
          💣
        </span>
      </button>
      <button
        className="button difficulty-button"
        onClick={() => initializeBoard(...Difficulty.MEDIUM)}
      >
        <span role="img" aria-label="medium-mode">
          💣💣
        </span>
      </button>
      <button
        className="button difficulty-button"
        onClick={() => initializeBoard(...Difficulty.HARD)}
      >
        <span role="img" aria-label="hard-mode">
          💣💣💣
        </span>
      </button>
    </span>
  </div>
);

export default DifficultyButtons;
