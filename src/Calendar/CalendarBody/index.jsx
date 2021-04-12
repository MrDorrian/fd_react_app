import React from 'react';
import { format } from 'date-fns';
import Month from '../Month';

import styles from '../Calendar.module.scss';

const WeekDays = () => {
  return (
    <tr>
      <td className={styles.weekDays}>S</td>
      <td className={styles.weekDays}>M</td>
      <td className={styles.weekDays}>T</td>
      <td className={styles.weekDays}>W</td>
      <td className={styles.weekDays}>T</td>
      <td className={styles.weekDays}>F</td>
      <td className={styles.weekDays}>S</td>
    </tr>
  );
};

const CalendarBody = props => {
  const { currentDay } = props;

  return (
    <div className={styles.monthBody}>
      <div className={styles.currentMonth}>
        {format(currentDay, 'LLLL yyyy ')}
      </div>
      <table>
        <thead>
          <WeekDays currentDay={currentDay} />
        </thead>
        <tbody>
          <Month currentDay={currentDay} />
        </tbody>
      </table>
    </div>
  );
};

export default CalendarBody;
