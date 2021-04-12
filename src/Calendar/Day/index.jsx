import { format, isSameMonth, isToday } from 'date-fns';
import React from 'react';
import cx from 'classnames';
import styles2 from '../Calendar.module.scss';

const Day = props => {
  const { day, currentDay } = props;

  const classNames = cx(styles2.dayOfWeek, {
    [styles2.currentMonthDay]: isSameMonth(day, currentDay),
    [styles2.dayOfMonth]: isToday(day),
  });
  return <td classNames={classNames}>{format(day, 'd')}</td>;
};

export default Day;
