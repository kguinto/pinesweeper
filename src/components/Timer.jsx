import React, { Component } from 'react';
import './NumDisplay.css';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = { startTime: null, newTime: null };
    this.updateTime = this.updateTime.bind(this);
  }
  componentWillReceiveProps() {
    if (this.props.gameStatus !== 'PLAYING') {
      this.setState({ startTime: null, newTime: null });
    } else if (this.state.startTime === null) {
      this.setState({ startTime: new Date(), newTime: null });
      this.updateTime();
    }
  }

  updateTime() {
    if (this.props.gameStatus === 'PLAYING') {
      this.setState({ newTime: new Date() });
      setTimeout(() => {
        this.updateTime();
      }, 1000);
    }
  }

  render() {
    let time =
      this.props.gameStatus !== 'INIT' &&
      this.state.startTime &&
      this.state.newTime
        ? Math.floor((this.state.newTime - this.state.startTime) / 1000)
        : 0;

    let timeString = '';
    if (time <= 9) {
      timeString = '00' + time.toString();
    } else if (time <= 99) {
      timeString = '0' + time.toString();
    } else if (time <= 999) {
      timeString = time.toString();
    } else {
      timeString = '999';
    }

    return <div className="num-display timer">{timeString}</div>;
  }
}

export default Timer;
