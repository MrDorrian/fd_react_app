import React from 'react';
import Week from '../Week';
import { getWeek, getYear } from 'date-fns';

const Month = (props) => {
  const { currentDay } = props;
  const week = getWeek(currentDay);
  const year = getYear(currentDay);

  const yearArray = [];

  for (let i = 0; i < 6; i++) {
    yearArray.push(
      <Week key={`${year}-${week}`} year={year} week={week + i} />
    );
  }

  return <>{[yearArray]}</>;
};

export default Month;
