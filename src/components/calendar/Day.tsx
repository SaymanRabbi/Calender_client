import React from 'react';
import { Moment } from 'moment';
import { Body2 } from '../Typography';

interface DayProps {
  date: Moment;
}

function Day({ date }: DayProps) {
  const dayName = date.format('ddd'); // Get the abbreviated day name (e.g., "Sat")

  return (
    <Body2 className="w-20 text-gray-400 h-8 flex justify-center items-center">
      {dayName} {date.date()}
    </Body2>
  );
}

export default Day;
