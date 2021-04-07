import React from 'react';
import { format } from 'date-fns';

import styles from '../Calendar.module.css';

const CurrentDay = (props) => {
  const { currentDay } = props;
  return (
    <div className={styles.currentDayBody}>
      <div className={styles.currentDay}>{format(currentDay, 'EEEE')}</div>
      <div className={styles.currentDayNumber}>{format(currentDay, 'd')}</div>
    </div>
  );
};

export default CurrentDay;
