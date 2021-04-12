import React, { Component } from 'react';
import styles from './StopWatch.module.scss';

class StopWatch extends Component {
  constructor (props) {
    super(props);
    this.intervalId = null;
    this.state = {
      isRunning: false,
      time: new Date(0, 0, 0, 0, 0, 0, 0),
    };
  }

  tick = () => {
    this.setState((state, props) => {
      const { time } = state;
      const newTime = new Date(time.getTime());
      newTime.setSeconds(newTime.getSeconds() + 1);
      this.setState({ time: newTime });
    });
  };

  start = () => {
    this.setState({ isRunning: true });
  };

  stop = () => {
    this.setState({ isRunning: false });
  };

  clear = () => {
    clearInterval(this.timeoutId);
    this.timeoutId = null;
  };

  reset = () => {
    this.clear();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0, 0) });
  };

  componentDidMount () {
    this.start();
  }

  componentDidUpdate () {
    const { isRunning } = this.state;
    this.clear();
    if (isRunning) {
      this.timeoutId = setTimeout(this.tick, 1000);
    }
  }

  componentWillUnmount () {
    this.clear();
  }
  render () {
    const { time, isRunning } = this.state;
    return (
      <article className={styles.container}>
        <h2>Stop Watch</h2>
        <h1 className={styles.currentTime}>
          {time.toLocaleTimeString('it-IT')}
        </h1>
        <div className='controls'>
          {!isRunning ? (
            <button onClick={this.start}>Start</button>
          ) : (
            <button onClick={this.stop}>Stop</button>
          )}
          <button onClick={this.reset}>Reset</button>
        </div>
      </article>
    );
  }
}

export default StopWatch;
