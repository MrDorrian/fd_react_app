import React from 'react';
import { format, getWeek, getYear } from 'date-fns';
import Week from '../Week';

import styles from '../Calendar.module.css';

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

const CalendarBody = (props) => {
  const { currentDay } = props;
  const week = getWeek(currentDay);
  const year = getYear(currentDay);

  const yearArray = [];

  for (let i = 0; i < 6; i++) {
    yearArray.push(
      <Week key={`${year} ${week}`} year={year} week={week + i} />
    );
  }

  return (
    <div className={styles.monthBody}>
      <div className={styles.currentMonth}>
        {format(currentDay, 'LLLL yyyy ')}
      </div>
      <table>
        <thead>
          <WeekDays />
        </thead>
        <tbody>{[yearArray]}</tbody>
      </table>
    </div>
  );
};

export default CalendarBody;
