import React from 'react';
import { parse, addDays } from 'date-fns';
import Day from '../Day';

const Week = props => {
  const { year, week, currentDay } = props;

  const startOfWeek = parse(`${year} ${week}`, 'Y w', new Date());

  const dayArray = [];

  for (let i = 0; i < 7; i++) {
    dayArray.push(
      <Day
        key={`${i}-${year}-${week}`}
        day={addDays(startOfWeek, i)}
        currentDay={currentDay}
      />
    );
  }
  return <tr>{[dayArray]}</tr>;
};

export default Week;
