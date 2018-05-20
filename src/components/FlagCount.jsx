import React from 'react';
import './NumDisplay.css';

const FlagCount = ({ flags }) => {
  let flagString = '';

  if (flags <= -99) {
    flagString = '-99';
  } else if (flags <= -10) {
    flagString = '-' + Math.abs(flags);
  } else if (flags <= -1) {
    flagString = '-0' + Math.abs(flags);
  } else if (flags <= 9) {
    flagString = '00' + flags.toString();
  } else if (flags <= 99) {
    flagString = '0' + flags.toString();
  } else if (flags <= 999) {
    flagString = flags.toString();
  } else {
    flagString = '999';
  }

  return <div className="num-display flagCount">{flagString}</div>;
};

export default FlagCount;
