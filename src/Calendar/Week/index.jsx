import React from 'react';
import { parse, addDays } from 'date-fns';
import Day from '../Day';

import styles from '../Calendar.module.css';

const Week = (props) => {
  const { year, week } = props;

  const startOfWeek = parse(`${year} ${week}`, 'Y w', new Date());

  const dayArray = [];

  for (let i = 0; i < 7; i++) {
    dayArray.push(
      <Day key={`${i}-${year}-${week}`} day={addDays(startOfWeek, i)} />
    );
  }
  return <tr className={styles.dayOfWeek}>{[dayArray]}</tr>;
};

export default Week;
