import React, { Component } from 'react';
import CalendarBody from './CalendarBody';
import CurrentDay from './CurrentDay';

import styles from './Calendar.module.scss';

class Calendar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentDay: new Date(),
    };
  }

  render () {
    const { currentDay } = this.state;

    return (
      <div className={styles.container}>
        <CurrentDay currentDay={currentDay} />
        <CalendarBody currentDay={currentDay} />
      </div>
    );
  }
}

export default Calendar;
